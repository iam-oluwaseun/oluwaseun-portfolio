variable "project_name" {
  description = "Base project name"
  type        = string
}

variable "environment" {
  description = "Environment name (dev, stage, prod)"
  type        = string
}

variable "location" {
  description = "Azure region (e.g., uksouth)"
  type        = string
}

variable "tags" {
  description = "Common resource tags"
  type        = map(string)
  default     = {}
}

# ACR
variable "acr_sku" {
  type        = string
  description = "Azure Container Registry SKU"
}

# AKS
variable "aks_node_count" {
  type        = number
  description = "Number of AKS nodes"
}

variable "aks_vm_size" {
  type        = string
  description = "VM size for AKS nodes"
}

# Key Vault
variable "kv_sku" {
  type        = string
  description = "Key Vault SKU"
}

# Storage
variable "storage_replication_type" {
  type        = string
  description = "Replication type for storage account"
}
