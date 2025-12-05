# Terraform Infrastructure as Code

This directory contains Terraform configuration for deploying Azure infrastructure.

## Structure

```
infra/terraform/
├── main.tf                 # Root module configuration
├── variables.tf            # Root-level variables
├── terraform.tfvars        # Variable values
├── provider.tf             # Azure provider configuration
├── backend.tf              # Backend configuration (remote state)
├── modules/
│   └── webapp/            # Web application infrastructure module
│       ├── main.tf        # Resource group
│       ├── aks.tf         # Azure Kubernetes Service
│       ├── acr.tf         # Azure Container Registry
│       ├── keyvault.tf    # Azure Key Vault
│       ├── storage.tf     # Storage Account
│       ├── rbac.tf        # Role-based access control
│       ├── local.tf       # Local values and naming
│       ├── variables.tf   # Module variables
│       └── outputs.tf     # Module outputs
└── envs/
    └── dev/               # Development environment overrides
```

## Prerequisites

1. **Azure CLI** installed and configured
   ```bash
   az login
   az account set --subscription "YOUR_SUBSCRIPTION_ID"
   ```

2. **Terraform** installed (v1.13.3 or later)
   ```bash
   terraform version
   ```

3. **Azure Permissions**: Contributor or Owner role on the subscription

## Usage

### Initialize Terraform
```bash
terraform init
```

### Plan Changes
```bash
terraform plan
```

### Apply Configuration
```bash
terraform apply
```

### Destroy Infrastructure
```bash
terraform destroy
```

## Configuration

Edit `terraform.tfvars` to customize:
- Project name
- Environment (dev/staging/prod)
- Location (Azure region)
- Resource SKUs and sizes
- Tags

## Resources Created

- **Resource Group**: Container for all resources
- **Azure Kubernetes Service (AKS)**: Kubernetes cluster
- **Azure Container Registry (ACR)**: Container image registry
- **Azure Key Vault**: Secrets management
- **Storage Account**: Blob storage

## Outputs

After deployment, view outputs:
```bash
terraform output
```

## Backend Configuration

By default, state is stored locally. For production, uncomment and configure the remote backend in `backend.tf`.

## Security Notes

- Key Vault network ACLs are set to "Allow" for dev, "Deny" for prod
- AKS uses SystemAssigned managed identity
- RBAC is enabled for AKS
- Storage accounts have public access disabled

