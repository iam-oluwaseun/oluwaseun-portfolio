resource "random_string" "suffix" {
  length  = 5
  upper   = false
  special = false
  numeric = true
}

locals {
  # Sanitized project name - remove everything except a-z, 0-9, and hyphens, then lowercase
  # Simple approach: lowercase and replace spaces/underscores with hyphens
  project_lower    = lower(var.project_name)
  project_clean    = replace(replace(local.project_lower, " ", "-"), "_", "-")
  project_sanitized = replace(replace(replace(replace(replace(replace(replace(replace(replace(
    local.project_clean, ".", ""), "(", ""), ")", ""), "[", ""), "]", ""), "{", ""), "}", ""), "/", "-"), "\\", "-")
  env = lower(var.environment)

  prefix = "${local.project_sanitized}-${local.env}"

  # Resource names
  rg_name  = "${local.prefix}-rg"
  aks_name = "${local.prefix}-aks"

  # ACR (must be 5–50 lowercase alphanumeric, no hyphens)
  acr_base = replace("${local.prefix}acr", "-", "")
  acr_name = substr(
    length(local.acr_base) < 5 ? "${local.acr_base}${random_string.suffix.result}" : local.acr_base,
    0,
    50
  )

  # Storage account (3–24 lowercase alphanumeric only)
  sa_base = replace("${local.prefix}sa", "-", "")
  sa_name = substr("${local.sa_base}${random_string.suffix.result}", 0, 24)

  # Key Vault (3–24 alphanumeric only)
  kv_base = replace("${local.prefix}kv", "-", "")
  kv_name = substr("${local.kv_base}${random_string.suffix.result}", 0, 24)

  tags = merge(
    {
      project     = local.project_sanitized
      environment = local.env
      managed_by  = "terraform"
    },
    var.tags
  )
}
