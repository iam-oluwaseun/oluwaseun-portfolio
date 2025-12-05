variable "name" {
  description = "Storage account name (3-24 lowercase alphanumeric)"
  type        = string
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
}

variable "replication_type" {
  description = "Replication type (LRS, GRS, RAGRS)"
  type        = string
  default     = "LRS"
}

variable "tags" {
  description = "Storage account tags"
  type        = map(string)
  default     = {}
}
