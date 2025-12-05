module "webapp" {
  source = "./modules/webapp"

  project_name = var.project_name
  environment  = var.environment
  location     = var.location
  tags         = var.tags

  acr_sku                  = var.acr_sku
  aks_node_count           = var.aks_node_count
  aks_vm_size              = var.aks_vm_size
  kv_sku                   = var.kv_sku
  storage_replication_type = var.storage_replication_type
}

output "resource_group_name" {
  value       = module.webapp.resource_group_name
  description = "Resource group where all resources are created."
}

output "aks_name" {
  value       = module.webapp.aks_name
  description = "AKS cluster name."
}

output "acr_login_server" {
  value       = module.webapp.acr_login_server
  description = "ACR login server URL."
}

output "storage_account_name" {
  value       = module.webapp.storage_account_name
  description = "Storage account name."
}

output "key_vault_name" {
  value       = module.webapp.key_vault_name
  description = "Key Vault name."
}

