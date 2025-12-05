variable "name" {
  type        = string
  description = "AKS cluster name"
}

variable "resource_group_name" {
  type        = string
  description = "Resource group name"
}

variable "location" {
  type        = string
  description = "Azure region"
}

variable "node_count" {
  type        = number
  description = "Node count"
  default     = 1
}

variable "vm_size" {
  type        = string
  description = "VM size for AKS nodes"
  default     = "Standard_B2s"
}

variable "tags" {
  type        = map(string)
  description = "AKS tags"
  default     = {}
}
