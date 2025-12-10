#!/usr/bin/env bash
set -euo pipefail

############################################
# Config – update if you rename things
############################################
SUBSCRIPTION_ID="81479b59-bf63-4b17-b43f-59194b718a87"
RESOURCE_GROUP="oluwaseun-portfolio-dev-rg"
AKS_CLUSTER="oluwaseun-portfolio-dev-aks"
NAMESPACE="monitoring"
RELEASE_NAME="kube-prometheus-stack"

# You can override this when running the script:
# GRAFANA_PASSWORD="MyStrongPassword" ./monitoring.sh
GRAFANA_PASSWORD="${GRAFANA_PASSWORD:-ChangeMe123!}"

echo "========================================"
echo "Setting Azure subscription..."
echo "Subscription: $SUBSCRIPTION_ID"
echo "========================================"
az account set --subscription "$SUBSCRIPTION_ID"

echo
echo "========================================"
echo "Getting AKS credentials for:"
echo "  RG:       $RESOURCE_GROUP"
echo "  Cluster:  $AKS_CLUSTER"
echo "========================================"
az aks get-credentials \
  -g "$RESOURCE_GROUP" \
  -n "$AKS_CLUSTER" \
  --overwrite-existing

echo
echo "Checking cluster access..."
kubectl get nodes

echo
echo "========================================"
echo "Adding / updating Helm repos..."
echo "========================================"
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts >/dev/null 2>&1 || true
helm repo update

echo
echo "========================================"
echo "Installing / upgrading kube-prometheus-stack"
echo "Namespace: $NAMESPACE"
echo "Release:   $RELEASE_NAME"
echo "Grafana:   LoadBalancer service"
echo "========================================"
helm upgrade --install "$RELEASE_NAME" prometheus-community/kube-prometheus-stack \
  --namespace "$NAMESPACE" \
  --create-namespace \
  --values ./k8s/values.yaml \
  --set grafana.service.type=LoadBalancer \
  --set grafana.adminPassword="$GRAFANA_PASSWORD"

echo
echo "Waiting for Grafana service to get an external IP..."
kubectl get svc -n "$NAMESPACE" "$RELEASE_NAME-grafana"

echo
echo "========================================"
echo "Installation complete!"
echo
echo "If EXTERNAL-IP is '<none>', wait a bit and run:"
echo "  kubectl get svc -n $NAMESPACE $RELEASE_NAME-grafana -w"
echo
echo "Once EXTERNAL-IP is assigned, open in your browser:"
echo "  http://<EXTERNAL-IP>"
echo
echo "Login to Grafana with:"
echo "  Username: admin"
echo "  Password: $GRAFANA_PASSWORD"
echo
echo "IMPORTANT: Change the password after the first login!"
echo "========================================"
