variable "name" {
  type        = string
  description = "ACR name (5-50 lowercase alphanumeric)"
}

variable "resource_group_name" {
  type        = string
  description = "Resource group name"
}

variable "location" {
  type        = string
  description = "Azure region"
}

variable "sku" {
  type        = string
  description = "ACR SKU (e.g. Basic, Standard, Premium)"
  default     = "Basic"
}

variable "tags" {
  type        = map(string)
  description = "ACR tags"
  default     = {}
}
