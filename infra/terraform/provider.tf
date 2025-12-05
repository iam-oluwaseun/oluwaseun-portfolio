# Azure Provider source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=4.1.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  # Set to "none" if the identity running Terraform lacks permissions to register providers
  # Set to "auto" (default) to automatically register required providers
  resource_provider_registrations = "none"
  subscription_id                 = var.subscription_id # Get from Azure CLI: az account show --query id -o tsv
  features {}
}
