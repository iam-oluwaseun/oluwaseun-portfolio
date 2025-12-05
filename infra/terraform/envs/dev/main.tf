terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.1.0"
    }
  }
}

provider "azurerm" {
  subscription_id = var.subscription_id
  features {}
}

module "webapp" {
  source = "../../modules/webapp"

  project_name             = var.project_name
  environment              = var.environment
  location                 = var.location
  tags                     = var.tags

  acr_sku                  = var.acr_sku
  aks_node_count           = var.aks_node_count
  aks_vm_size              = var.aks_vm_size
  kv_sku                   = var.kv_sku
  storage_replication_type = var.storage_replication_type
}

output "resource_group_name" {
  description = "Dev resource group name"
  value       = module.webapp.resource_group_name
}

output "aks_name" {
  description = "Dev AKS cluster name"
  value       = module.webapp.aks_name
}

output "acr_login_server" {
  description = "Dev ACR login server"
  value       = module.webapp.acr_login_server
}

output "storage_account_name" {
  description = "Dev storage account name"
  value       = module.webapp.storage_account_name
}

output "key_vault_name" {
  description = "Dev Key Vault name"
  value       = module.webapp.key_vault_name
}


