variable "name" {
  type        = string
  description = "Key Vault name"
}

variable "resource_group_name" {
  type        = string
  description = "Resource group name"
}

variable "location" {
  type        = string
  description = "Azure region"
}

variable "tenant_id" {
  type        = string
  description = "Azure AD tenant ID"
}

variable "object_id" {
  type        = string
  description = "Object ID of principal that gets initial access"
}

variable "sku_name" {
  type        = string
  description = "Key Vault SKU (standard or premium)"
  default     = "standard"
}

variable "tags" {
  type        = map(string)
  description = "Key Vault tags"
  default     = {}
}
