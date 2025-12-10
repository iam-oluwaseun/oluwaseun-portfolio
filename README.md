# Oluwaseun O. Opebiyi — DevOps Portfolio

A modern, responsive portfolio website showcasing Oluwaseun O. Opebiyi's cloud engineering and DevOps expertise. Built with React + Tailwind CSS and deployed to Azure Kubernetes Service (AKS) with full infrastructure-as-code, containerization, CI/CD automation, and production monitoring.

## 🎯 Project Overview

This project demonstrates enterprise-level DevOps practices:
- **Frontend**: React 18 with Tailwind CSS (responsive, modern design)
- **Containerization**: Docker multi-stage build for minimal image size
- **Infrastructure**: Terraform modules provisioning AKS, ACR, Key Vault, Storage
- **Orchestration**: Kubernetes deployment with rolling updates
- **CI/CD**: GitHub Actions automated build, test, scan, and deploy
- **Monitoring**: Prometheus + Grafana for metrics and Alertmanager for alerts
- **Security**: Image scanning (Trivy), code quality (SonarCloud), secrets management

## 📚 Quick Links

- **Live Site**: http://<YOUR_AKS_EXTERNAL_IP> (assigned after deployment)
- **GitHub Repo**: https://github.com/iam-oluwaseun/oluwaseun-portfolio
- **Grafana Dashboard**: http://<GRAFANA_EXTERNAL_IP> (after `monitoring.sh`)
- **Architecture**: See `docs/architecture.md`

## 🏗️ Project Architecturee

Developer (React)
↓ git push
GitHub Actions (Build → Scan → Push Image)
↓ docker push
Azure Container Registry (ACR)
↓ pull image
AKS Cluster
├─ App Namespace: Deployment + Service (LoadBalancer)
└─ Monitoring Namespace: Prometheus + Grafana + Alertmanager

┌────────────────────────────────────────────────────────┐
│                   GitHub Repository                    │
│                     (Source Code)                      │
└───────────────▲───────────────────────────▲────────────┘
                │                           │
                │ Code Push                 │ CI/CD Pipeline
                │                           │
        ┌───────┴────────┐          ┌───────┴───────────────┐
        │   Terraform     │          │   GitHub Actions      │
        │   (IaC)         │          │   (Build → Scan →     │
        └───────┬────────┘          │    Push → Deploy)     │
                │                   └───────────▲────────────┘
                │ terraform apply                │ kubectl apply
                ▼                                ▼
      ┌─────────────────┐            ┌────────────────────────────┐
      │ Azure Resources │            │ AKS Kubernetes Cluster      │
      │ (RG, ACR, AKS)  │            │ (Pods, Services, Ingress)  │
      └───────┬────────┘            └───────────┬────────────────┘
              │                                  │ Metrics
              ▼                                  ▼
      ┌──────────────────────┐        ┌────────────────────────────┐
      │ Azure Container      │        │ Prometheus + Grafana       │
      │ Registry (ACR)       │        │ (Monitoring + Alerts)      │
      └──────────────────────┘        └────────────────────────────┘



## 🚀 Tech Stack

### Frontend
- **React** 18.2.0
- **Tailwind CSS** 3.1.6
- **Create React App** (build tool)

### Infrastructure & DevOps
- **Terraform**: Infrastructure as Code (AKS, ACR, Key Vault, Storage, RG)
- **Kubernetes (AKS)**: Container orchestration
- **Helm**: Package manager for Prometheus stack
- **Docker**: Multi-stage containerization
- **GitHub Actions**: CI/CD pipeline

### Monitoring & Alerts
- **Prometheus**: Metrics collection
- **Grafana**: Metrics visualization & dashboards
- **Alertmanager**: Alert routing (email, Slack, PagerDuty)
- **kube-prometheus-stack**: Helm chart bundling all three

### Security & Scanning
- **Trivy**: Container image vulnerability scanning
- **SonarCloud**: Code quality and security scanning (optional)
- **Azure Key Vault**: Secrets management
- **GitHub Secrets**: CI credentials

## 📦 Local Development

### Prerequisites
- Node.js 16+ and npm
- Docker (optional, for local container testing)

### Setup & Run Locally

1. **Install dependencies**:
   ```bash
2   npm install
Start development server (http://localhost:3000):
    npm start
3  Run tests: 
   npm test    
4  Build for production:
   npm run build 

Docker Build & Run
Build locally

docker build -t oluwaseun-portfolio:local . 
Run container locally

docker run -d -p 8080:80 --name oluwaseun-portfolio oluwaseun-portfolio:local
# Open: http://localhost:8080

View logs
docker logs -f oluwaseun-portfolio

Stop container
docker stop oluwaseun-portfolio

🏗️ Infrastructure Setup (Terraform)
Prerequisites
Azure CLI: az login
Terraform v1.3+
Subscription with Contributor/Owner role

Deploy Infrastructure
cd infra/terraform

# Initialize
terraform init

# Validate & preview
terraform plan -out=tfplan

# Apply
terraform apply tfplan

# Show outputs
terraform output

Resource Created
Resource Group: oluwaseun-portfolio-dev-rg
AKS Cluster: oluwaseun-portfolio-dev-aks (2 nodes, configurable)
ACR: oluwaseunportfoliodevacr.azurecr.io (private container registry)
Key Vault: For secrets
Storage Account: For backups/logs

🐳 4. Dockerize Portfolio App
 Build Image
docker build -t portfolio-app:v1 .

Run Locally
 docker run -p 8080:80 portfolio-app:v1

Tag for ACR
docker tag portfolio-app:v1 <ACR_NAME>.azurecr.io/portfolio-app:v1

Push to ACR
docker push <ACR_NAME>.azurecr.io/portfolio-app:v1

☸️ Kubernetes Deployment
Prerequisites
kubectl
AKS cluster created (via Terraform)
Docker image pushed to ACR

Get AKS Credentials
az aks get-credentials \
  -g oluwaseun-portfolio-dev-rg \
  -n oluwaseun-portfolio-dev-aks \
  --overwrite-existing

  Deploy App to AKS
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml

# Check status
kubectl get pods,svc

Get External IP
kubectl get svc oluwaseun-portfolio -w
# Wait for EXTERNAL-IP to appear

Access the App
Open http://<EXTERNAL-IP> in your browser.

Targets
🔄 CI/CD Pipeline (GitHub Actions)
Workflow Triggers
Pipeline stages:
1.Checkout Code
2.SonarCloud Scan
3.Trivy Security Scan
4.Build Docker Image
5.Push to ACR
6.Deploy to AKS via kubectl

📊 Monitoring & Alerts Setup
Install Monitoring Stack (Prometheus + Grafana)
Quick Install (with defaults)
GRAFANA_PASSWORD="YourStrongPassword!" ./k8s/monitoring.sh

Custom Install (with SMTP config)
export GRAFANA_PASSWORD="YourStrongPassword!"
export GMAIL_APP_PASSWORD="your-16-char-app-password"

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

helm upgrade --install kube-prometheus-stack prometheus-community/kube-prometheus-stack \
  --namespace monitoring --create-namespace \
  --values ./k8s/values.yaml \
  --set grafana.service.type=LoadBalancer \
  --set grafana.adminPassword="$GRAFANA_PASSWORD" \
  --set alertmanager.config.receivers[0].email_configs[0].auth_password="$GMAIL_APP_PASSWORD"

Access Grafana
# Get external IP
kubectl get svc -n monitoring kube-prometheus-stack-grafana

Grafana Login:

URL: http://<EXTERNAL-IP> or http://localhost:
Username: admin
Password: Your GRAFANA_PASSWORD

Apply Alert Rules
kubectl apply -f k8s/test-alert-rule.yaml

# Verify rules
kubectl get prometheusrules -n monitoring
Verify Alerts Are Working
Check Prometheus targets: kubectl port-forward svc/kube-prometheus-stack-prometheus -n monitoring 9090:9090
Open http://localhost: → Status → 

GitHub Secrets Required
Set these in your repo: Settings → Secrets and variables → Actions

AZURE_CREDENTIALS        # Service principal JSON (az ad sp create-for-rbac)
AZURE_CONTAINER_REGISTRY # e.g., oluwaseunportfoliodevacr.azurecr.io
AZURE_RESOURCE_GROUP     # e.g., oluwaseun-portfolio-dev-rg
AZURE_AKS_CLUSTER        # e.g., oluwaseun-portfolio-dev-aks
GMAIL_APP_PASSWORD       # (optional) Gmail app password for Alertmanager
SONAR_TOKEN              # (optional) SonarCloud token

Create Azure Service Principal
az ad sp create-for-rbac \
  --name "gha-aks-deploy" \
  --role contributor \
  --scopes /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP>
# Copy the JSON output and store as AZURE_CREDENTIALS secret

Pipeline Steps
Checkout code
Build & Test (npm)
Build Docker image (tagged with commit SHA)
Scan image (Trivy)
Scan code (SonarCloud — optional)
Push to ACR
Get AKS credentials
Update deployment (kubectl set image)
Monitor rollout
🔒 Security Best Practices
⚠️ IMPORTANT: Never commit secrets (passwords, API keys, tokens).

Secrets Management
GitHub Secrets: Store CI credentials (AZURE_CREDENTIALS, SONAR_TOKEN, etc.)
Azure Key Vault: Store runtime secrets (SMTP password, app keys)
Kubernetes Secrets: Created by Helm for sensitive configs
values.yaml: Redact any credentials (use placeholders or --set overrides)
Example: Secure SMTP Password
Instead of storing the Gmail app password in values.yaml, create a Kubernetes secret:

kubectl create secret generic gmail-smtp -n monitoring \
  --from-literal=auth_password='YOUR_16_CHAR_APP_PASSWORD'

  Then reference it in Helm or Alertmanager config (advanced setup — see Helm docs).
  📁 Project Structure

oluwaseun-portfolio/
├── src/                          # React source code
│   ├── components/              # React components
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── DevOpsJourney.js
│   │   ├── PipelineDiagram.js
│   │   └── Contact.js
│   ├── App.js                   # Main App component
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles
├── public/                       # Static assets
├── build/                        # Production build (generated)
├── infra/terraform/              # Infrastructure as Code
│   ├── main.tf                  # Root module
│   ├── variables.tf             # Input variables
│   ├── provider.tf              # Azure provider
│   ├── backend.tf               # Remote state
│   └── modules/webapp/          # AKS, ACR, RG, Key Vault, Storage
├── k8s/                          # Kubernetes manifests
│   ├── deployment.yml           # App deployment
│   ├── service.yml              # LoadBalancer service
│   ├── values.yaml              # Helm chart values (Prometheus stack)
│   ├── test-alert-rule.yaml     # PrometheusRule with alert definitions
│   └── monitoring.sh            # Script to deploy monitoring
├── .github/workflows/            # GitHub Actions
│   └── deploy.yml               # CI/CD pipeline
├── Dockerfile                    # Multi-stage container build
├── package.json                 # Node dependencies
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS config
├── BUILD_AND_RUN.md             # Docker build/run instructions
├── README.md                     # This file
└── FIXES_APPLIED.md             # Project fixes & updates

🎨 Design System
Colors
Navy: #0A2540 — Primary background
Cyan: #3B82F6 — Primary accent / links
Purple: #9333EA — Secondary accent
Light Cyan: #E6F0FF — Text on dark

Typography
Font: Inter (Google Fonts, sans-serif)
Weights: 300, 400, 500, 600, 700, 800, 900

Components
Cards: Gradient background with blur + shadow
Buttons: Gradient (primary) or outline (secondary)
Badges: Tech stack indicators with gradient borders

🧪 Testing
   npm test

Run linting (via ESLint in CRA):
  npm run lint  # if configured

📋 Common Commands Cheat Sheet
Task	Command
Local Dev	npm install && npm start
Build	npm run build
Docker Build	docker build -t oluwaseun-portfolio:local .
Docker Run	docker run -d -p 8080:80 oluwaseun-portfolio:local
Terraform Init	cd infra/terraform && terraform init
Terraform Plan	terraform plan -out=tfplan
Terraform Apply	terraform apply tfplan
Get AKS Creds	az aks get-credentials -g <RG> -n <AKS> --overwrite-existing
Deploy to AKS	kubectl apply -f k8s/
Get App External IP	kubectl get svc oluwaseun-portfolio
Deploy Monitoring	GRAFANA_PASSWORD="xxx" ./k8s/monitoring.sh
Access Grafana	kubectl get svc -n monitoring kube-prometheus-stack-grafana
View Logs	kubectl logs -f <pod-name>
Describe Pod	kubectl describe pod <pod-name>

🚀 Deployment Checklist
 Infrastructure provisioned via Terraform
 Docker image built locally and tested
 Image pushed to ACR
 Kubernetes manifests deployed to AKS
 App accessible via LoadBalancer external IP
 Prometheus + Grafana installed (monitoring.sh)
 Alert rules applied
 GitHub Actions pipeline running and deploying on commits
 Secrets stored securely (GitHub Secrets, Key Vault, not in repo)

📚 Documentation & Resources
Terraform Azure Provider: https://registry.terraform.io/providers/hashicorp/azurerm/latest
Kubernetes Official Docs: https://kubernetes.io/docs/
Helm Package Manager: https://helm.sh/
kube-prometheus-stack: https://github.com/prometheus-community/helm-charts
GitHub Actions Docs: https://docs.github.com/en/actions
React Docs: https://react.dev/
Tailwind CSS Docs: https://tailwindcss.com/

🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit changes (git commit -m "feat: add amazing feature")
Push to branch (git push origin feature/amazing-feature)
Open a Pull Request
📝 License
This project is licensed under the MIT License — see the LICENSE file for details.

👤 About Me
Oluwaseun O. Opebiyi — Cloud Engineer & DevOps Practitioner

🔗 LinkedIn: [linkedin.com/in/oluwaseun-o-opebiyi-6b91ab29]
🌐 Portfolio: https://github.com/iam-oluwaseun/oluwaseun-portfolio
📧 Contact: [opebiyioluwaseun@outlook.com]
Last Updated: December 2025

Project Status: ✅ Active — Continuously updated with latest DevOps best practices.













