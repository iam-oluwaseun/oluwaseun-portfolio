#!/bin/bash
# Script to create ACR pull secret for Kubernetes
# Usage: ./setup-acr-secret.sh <acr-name> <resource-group>

set -e

ACR_NAME=${1:-"oluwaseunportfoliodevacr"}
RESOURCE_GROUP=${2:-"oluwaseun-portfolio-dev-rg"}
NAMESPACE=${3:-"default"}

echo "Setting up ACR pull secret for: $ACR_NAME"
echo "Resource Group: $RESOURCE_GROUP"
echo "Namespace: $NAMESPACE"

# Get ACR login server
ACR_LOGIN_SERVER=$(az acr show --name "$ACR_NAME" --resource-group "$RESOURCE_GROUP" --query loginServer -o tsv)
echo "ACR Login Server: $ACR_LOGIN_SERVER"

# Get ACR credentials
ACR_USERNAME="$ACR_NAME"
ACR_PASSWORD=$(az acr credential show --name "$ACR_NAME" --query passwords[0].value -o tsv)

# Create namespace if it doesn't exist
kubectl create namespace "$NAMESPACE" --dry-run=client -o yaml | kubectl apply -f -

# Delete existing secret if it exists
kubectl delete secret acr-secret -n "$NAMESPACE" --ignore-not-found=true

# Create the secret
kubectl create secret docker-registry acr-secret \
  --docker-server="$ACR_LOGIN_SERVER" \
  --docker-username="$ACR_USERNAME" \
  --docker-password="$ACR_PASSWORD" \
  --namespace="$NAMESPACE"

echo "✅ ACR secret 'acr-secret' created successfully in namespace '$NAMESPACE'"
echo ""
echo "To verify:"
echo "  kubectl get secret acr-secret -n $NAMESPACE"

