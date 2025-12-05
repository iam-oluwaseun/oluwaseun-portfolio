output "resource_group_name" {
  value = module.rg.name
}

output "aks_name" {
  value = module.aks.name
}

output "acr_login_server" {
  value = module.acr.login_server
}

output "storage_account_name" {
  value = module.storage.name
}

output "key_vault_name" {
  value = module.keyvault.name
}

