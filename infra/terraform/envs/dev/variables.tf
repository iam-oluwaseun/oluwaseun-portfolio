variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
}

variable "project_name" {
  description = "Base name for the dev project"
  type        = string
  default     = "oluwaseun-portfolio"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}

variable "location" {
  description = "Azure region (canonical, e.g., uksouth)"
  type        = string
  default     = "uksouth"
}

variable "tags" {
  description = "Common tags for dev resources"
  type        = map(string)
  default = {
    environment = "dev"
    owner       = "Oluwaseun O. Opebiyi"
  }
}

# ACR
variable "acr_sku" {
  description = "ACR SKU for dev"
  type        = string
  default     = "Basic"
}

# AKS
variable "aks_node_count" {
  description = "AKS node count for dev"
  type        = number
  default     = 1
}

variable "aks_vm_size" {
  description = "AKS VM size for dev"
  type        = string
  default     = "Standard_B2s"
}

# Key Vault
variable "kv_sku" {
  description = "Key Vault SKU for dev"
  type        = string
  default     = "standard"
}

# Storage
variable "storage_replication_type" {
  description = "Storage replication type for dev"
  type        = string
  default     = "LRS"
}
