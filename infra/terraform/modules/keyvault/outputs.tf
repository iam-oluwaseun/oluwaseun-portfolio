output "id" {
  value       = azurerm_key_vault.this.id
  description = "Key Vault resource ID"
}

output "name" {
  value       = azurerm_key_vault.this.name
  description = "Key Vault name"
}
