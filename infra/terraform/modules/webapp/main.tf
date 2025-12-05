# Required for Key Vault tenant & object ID
data "azurerm_client_config" "current" {}

# Resource Group
module "rg" {
  source = "../rg"

  name     = local.rg_name
  location = var.location
  tags     = local.tags
}

# ACR
module "acr" {
  source = "../acr"

  name                = local.acr_name
  resource_group_name = module.rg.name
  location            = var.location
  sku                 = var.acr_sku
  tags                = local.tags
}

# AKS
module "aks" {
  source = "../aks"

  name                = local.aks_name
  resource_group_name = module.rg.name
  location            = var.location
  node_count          = var.aks_node_count
  vm_size             = var.aks_vm_size
  tags                = local.tags
}

# Storage Account
module "storage" {
  source = "../storage"

  name                = local.sa_name
  resource_group_name = module.rg.name
  location            = var.location
  replication_type    = var.storage_replication_type
  tags                = local.tags
}

# Key Vault
module "keyvault" {
  source = "../keyvault"

  name                = local.kv_name
  resource_group_name = module.rg.name
  location            = var.location
  sku_name            = var.kv_sku
  tenant_id           = data.azurerm_client_config.current.tenant_id
  object_id           = data.azurerm_client_config.current.object_id
  tags                = local.tags
}

