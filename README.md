# Oluwaseun O. Opebiyi — End-to-End DevOps Portfolio

A modern, production-ready portfolio website demonstrating **real-world DevOps and Cloud Engineering practices**. The application is built with **React + Tailwind CSS** and deployed on **Azure Kubernetes Service (AKS)** using **Infrastructure as Code, containerization, CI/CD automation, monitoring, and security best practices**.

---

## 💡 Why This Project?

This project was created to go beyond tutorials and labs and instead simulate how a **real DevOps team** would design, deploy, secure, and operate a production application in the cloud.

**Key goals:**

* Design and deploy a scalable frontend application on Kubernetes
* Provision Azure infrastructure using Terraform (IaC)
* Automate build, security scanning, and deployment with CI/CD
* Implement monitoring, alerting, and secure secrets management

This portfolio reflects how I would approach real-world deployments as a **Junior DevOps / Cloud Engineer**.

---

## 🎯 Project Overview

This project demonstrates enterprise-level DevOps practices:

* **Frontend**: React 18 with Tailwind CSS (responsive, modern UI)
* **Containerization**: Docker multi-stage builds for minimal image size
* **Infrastructure**: Terraform modules provisioning AKS, ACR, Key Vault, Storage
* **Orchestration**: Kubernetes deployments with rolling updates
* **CI/CD**: GitHub Actions for automated build, scan, push, and deploy
* **Monitoring**: Prometheus, Grafana, and Alertmanager
* **Security**: Trivy image scanning, SonarCloud code analysis, secrets management

---

## 🧠 Skills Demonstrated

* Azure Cloud (AKS, ACR, Key Vault, Storage Accounts)
* Infrastructure as Code with Terraform
* Docker containerization and image optimisation
* Kubernetes deployments, services, and namespaces
* CI/CD automation using GitHub Actions
* Monitoring and alerting with Prometheus and Grafana
* Secure secrets management and vulnerability scanning
* Linux, Bash scripting, and YAML configuration

---

## 📚 Quick Links

* **GitHub Repository**: [https://github.com/iam-oluwaseun/oluwaseun-portfolio](https://github.com/iam-oluwaseun/oluwaseun-portfolio)
* **Live Site**: Available after AKS LoadBalancer external IP assignment
* **Grafana Dashboard**: Available after monitoring stack deployment

---

## 🏗️ Project Architecture

```
Developer (React)
↓ git push
GitHub Actions (Build → Scan → Push → Deploy)
↓ docker push
Azure Container Registry (ACR)
↓ pull image
AKS Cluster
├─ App Namespace: Deployment + Service (LoadBalancer)
└─ Monitoring Namespace: Prometheus + Grafana + Alertmanager
```

### Detailed Flow

```
┌───────────────────────────────────────────────┐
│               GitHub Repository               │
│                 (Source Code)                 │
└───────────────▲───────────────────────────────┘
                │
                │ Code Push
                ▼
        ┌────────────────────┐
        │  GitHub Actions     │
        │ Build → Scan →      │
        │ Push → Deploy       │
        └───────────▲────────┘
                    │ kubectl
                    ▼
          ┌────────────────────────┐
          │ AKS Kubernetes Cluster │
          │ Pods, Services         │
          └───────────▲────────────┘
                      │ Metrics
                      ▼
          ┌────────────────────────┐
          │ Prometheus & Grafana   │
          │ Monitoring & Alerts    │
          └────────────────────────┘
```

---

## 🚀 Tech Stack

### Frontend

* React 18
* Tailwind CSS
* Create React App (used for simplicity and rapid setup)

### Infrastructure & DevOps

* Terraform (Azure IaC)
* Azure Kubernetes Service (AKS)
* Azure Container Registry (ACR)
* Docker (multi-stage builds)
* Helm (monitoring stack)
* GitHub Actions (CI/CD)

### Monitoring & Security

* Prometheus
* Grafana
* Alertmanager
* Trivy (image scanning)
* SonarCloud (code quality)
* Azure Key Vault & GitHub Secrets

---

## 📦 Local Development

### Prerequisites

* Node.js 16+
* npm
* Docker (optional)

### Run Locally

   ```bash
npm install
    npm start
```

App runs at: [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
   npm run build 
```

---

## 🐳 Docker

### Build Image

```bash
docker build -t oluwaseun-portfolio:local . 
```

### Run Container

```bash
docker run -d -p 8080:80 oluwaseun-portfolio:local
```

Open: [http://localhost:8080](http://localhost:8080)

---

## 🏗️ Infrastructure Setup (Terraform)

### Prerequisites

* Azure CLI (`az login`)
* Terraform v1.3+

### Deploy Infrastructure

```bash
cd infra/terraform/envs/dev
terraform init
terraform plan -out=tfplan
terraform apply tfplan
```

### Resources Created

* Resource Group
* AKS Cluster
* Azure Container Registry
* Azure Key Vault
* Storage Account (state/logs)

---

## ☸️ Kubernetes Deployment

### Deployment Strategy

The application uses **Rolling Update** strategy for zero-downtime deployments:

* **Replicas**: 2 pods for high availability
* **Rolling Update**: Gradual replacement of old pods with new ones
* **Health Checks**: Liveness and readiness probes ensure pod health
* **Automatic Rollback**: Failed deployments automatically revert

### Deploy to AKS

**1. Get AKS Credentials:**
```bash
az aks get-credentials \
  -g oluwaseun-portfolio-dev-rg \
  -n oluwaseun-portfolio-dev-aks \
  --overwrite-existing
```

**2. Apply Kubernetes Manifests:**
```bash
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
```

**3. Verify Deployment:**
```bash
# Check pod status
kubectl get pods -l app=oluwaseun-portfolio

# Check service
kubectl get svc oluwaseun-portfolio

# View deployment details
kubectl describe deployment oluwaseun-portfolio

# Monitor rollout
kubectl rollout status deployment/oluwaseun-portfolio
```

### Deployment Features

* **Health Probes**: 
  * Liveness probe: Checks if container is running (every 10s)
  * Readiness probe: Checks if container is ready to serve traffic (every 5s)
  
* **Resource Management**:
  * CPU: 100m request, 250m limit
  * Memory: 64Mi request, 128Mi limit
  
* **Service Configuration**:
  * Type: LoadBalancer (external access)
  * Port: 80 (HTTP)
  * Target Port: 80 (container port)

### Rollout Verification

After deployment, the system automatically:
1. Checks pod health via readiness probes
2. Verifies all pods are in "Ready" state
3. Monitors for pod failures
4. Automatically rolls back if deployment fails
5. Ensures zero-downtime during updates

---

## 🔄 CI/CD Pipeline (GitHub Actions)

### CI Pipeline (Continuous Integration)

The CI pipeline runs on every push to `main`:

1. **Build Application**
   * Checkout source code
   * Install dependencies (`npm ci`)
   * Build React application (`npm run build`)
   * Run tests (`npm test`)

2. **Build Docker Image**
   * Multi-stage Docker build for optimized image size
   * Tag image with commit SHA: `oluwaseun-portfolio-app:${{ github.sha }}`

3. **Security Scanning**
   * Trivy vulnerability scan on container image
   * SonarCloud code quality analysis (optional)

4. **Push to ACR**
   * Authenticate with Azure Container Registry
   * Push image to ACR: `oluwaseunportfoliodevacr.azurecr.io/oluwaseun-portfolio-app:${{ github.sha }}`
   * Upload image tag metadata

### CD Pipeline (Continuous Deployment)

The CD pipeline automatically deploys after successful CI:

1. **Retrieve Image Tag**
   * Extract image tag from CI pipeline output
   * Verify image exists in ACR

2. **Update Kubernetes Manifest**
   * Update deployment manifest with new image tag
   * Apply rolling update strategy

3. **Deploy to AKS**
   * Get AKS cluster credentials
   * Apply updated deployment: `kubectl set image deployment/oluwaseun-portfolio`
   * Monitor rollout status

4. **Rollout Verification**
   * Check pod health and readiness probes
   * Verify all pods are running and healthy
   * Automatic rollback if deployment fails or pods become unhealthy
   * Result: Zero-downtime deployment with automatic recovery

### Pipeline Flow

```
Code Push → CI Pipeline → CD Pipeline → Production
    ↓            ↓              ↓
  Build      Build Image    Deploy to AKS
  Tests      Scan Image     Verify Health
  Lint       Push to ACR    Rollback if Failed
```

### Required Secrets

* `AZURE_CREDENTIALS` - Service principal for Azure authentication
* `AZURE_CONTAINER_REGISTRY` - ACR login server URL
* `AZURE_RESOURCE_GROUP` - Resource group name
* `AZURE_AKS_CLUSTER` - AKS cluster name
* `SONAR_TOKEN` - (optional) SonarCloud authentication token

---

## 📊 Observability & Monitoring

### Monitoring Stack Components

* **Prometheus**: Metrics collection and storage
* **Grafana**: Visualization and dashboards
* **Alertmanager**: Alert routing and notification

### Install Monitoring Stack

```bash
GRAFANA_PASSWORD="StrongPassword!" ./k8s/monitoring.sh
```

### Access Grafana

```bash
kubectl get svc -n monitoring kube-prometheus-stack-grafana
```

**Login Credentials:**
* Username: `admin`
* Password: Grafana password set during install

### Metrics Collected

* **Application Metrics**: Request rates, response times, error rates
* **Kubernetes Metrics**: Pod CPU/memory usage, node health
* **Infrastructure Metrics**: Container resource utilization
* **Custom Metrics**: Application-specific business metrics

### Alerting

* **Alert Rules**: Configured via PrometheusRule CRDs
* **Notification Channels**: Email, Slack, PagerDuty
* **Alert Conditions**: High error rates, pod failures, resource exhaustion

### Observability Features

* **Log Aggregation**: Centralized logging (via Prometheus/Loki)
* **Distributed Tracing**: Request tracing across services (future)
* **Health Checks**: Liveness and readiness probes
* **Performance Monitoring**: Real-time performance metrics

---

## 🔒 Security

### Security Practices Implemented

#### Secrets Management
* **GitHub Secrets**: CI/CD credentials and tokens
* **Azure Key Vault**: Runtime secrets and certificates
* **Kubernetes Secrets**: Application secrets managed by Helm
* **No Hardcoded Secrets**: All credentials externalized

#### Container Security
* **Image Scanning**: Trivy scans every Docker image for vulnerabilities
* **Multi-stage Builds**: Minimal attack surface with optimized images
* **Base Image Security**: Using official, regularly updated base images
* **Non-root User**: Containers run as non-privileged user

#### Code Security
* **SonarCloud**: Static code analysis for security vulnerabilities
* **Dependency Scanning**: npm audit for known vulnerabilities
* **SAST**: Static Application Security Testing in CI pipeline

#### Infrastructure Security
* **RBAC**: Role-Based Access Control for Kubernetes
* **Network Policies**: (Future) Restrict pod-to-pod communication
* **Private ACR**: Container registry with private endpoints
* **Managed Identity**: (Future) Replace service principals with managed identities

#### Deployment Security
* **TLS/HTTPS**: (Future) Cert-manager with Let's Encrypt
* **Image Pull Secrets**: Secure authentication to ACR
* **Resource Limits**: CPU and memory limits on containers
* **Security Contexts**: Pod security policies and contexts

### Security Checklist

- [x] Secrets stored externally (GitHub Secrets, Key Vault)
- [x] No credentials in source control
- [x] Container images scanned (Trivy)
- [x] Code quality scanning (SonarCloud)
- [x] Kubernetes RBAC configured
- [x] Resource limits enforced
- [ ] Network policies implemented
- [ ] TLS/HTTPS enabled
- [ ] Managed Identity for authentication

---

## 📁 Project Structure

```
oluwaseun-portfolio/
├── src/                  # React source code
├── infra/terraform/      # Terraform IaC
├── k8s/                  # Kubernetes manifests
├── .github/workflows/    # CI/CD pipelines
├── Dockerfile            # Multi-stage Docker build
└── README.md
```

---

## 🔮 Future Improvements

* Add NGINX Ingress Controller with HTTPS (cert-manager)
* Implement Horizontal Pod Autoscaler (HPA)
* Introduce GitOps with ArgoCD
* Replace service principals with Managed Identity
* Add end-to-end tests in CI pipeline
* Support multiple environments (dev/staging/prod)

---

## 👤 About Me

**Oluwaseun O. Opebiyi** — Cloud Engineer & DevOps Practitioner

* LinkedIn: [https://linkedin.com/in/oluwaseun-o-opebiyi-6b91ab29](https://linkedin.com/in/oluwaseun-o-opebiyi-6b91ab29)
* GitHub: [https://github.com/iam-oluwaseun](https://github.com/iam-oluwaseun)
* Email: [opebiyioluwaseun@outlook.com](mailto:opebiyioluwaseun@outlook.com)

---

⭐ If you find this project helpful, please consider starring the repository.

**Last Updated**: December 2025
