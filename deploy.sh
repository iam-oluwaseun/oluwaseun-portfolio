# ---- set your names (safe defaults; change if you want) ----
RG="oluwaseun-portfolio-rg"
LOC="uksouth"
PLAN="oluwaseun-portfolio-plan"
APP="oluwaseun-portfolio-app-$(date +%s)"     # makes the app name unique
ACR_NAME="oluwaseunportfoliodevacr"
IMAGE="$ACR_NAME.azurecr.io/oluwaseun-portfolio-app:v1"

# ---- login + create resource group ----
# az login
az group create --name "$RG" --location "$LOC"

# ---- create a Linux App Service plan ----
az appservice plan create \
  --name "$PLAN" \
  --resource-group "$RG" \
  --location "$LOC" \
  --sku B1 \
  --is-linux

# ---- create the web app from your container image ----
az webapp create \
  --resource-group "$RG" \
  --plan "$PLAN" \
  --name "$APP" \
  --deployment-container-image-name "$IMAGE"

# ---- enable managed identity on the web app ----
PRINCIPAL_ID=$(az webapp identity assign --name "$APP" --resource-group "$RG" --query principalId -o tsv)

# ---- grant the web app permission to pull from ACR (AcrPull) ----
ACR_ID=$(az acr show --name "$ACR_NAME" --query id -o tsv)
az role assignment create --assignee "$PRINCIPAL_ID" --role AcrPull --scope "$ACR_ID"

# ---- tell App Service to use its managed identity when pulling from ACR ----
az webapp config appsettings set \
  --name "$APP" \
  --resource-group "$RG" \
  --settings ACR_USE_MANAGED_IDENTITY_CREDENTIALS=true WEBSITES_PORT=80

# ---- (re)set container config just to be explicit ----
az webapp config container set \
  --name "$APP" \
  --resource-group "$RG" \
  --docker-custom-image-name "$IMAGE" \
  --docker-registry-server-url "https://$ACR_NAME.azurecr.io"

# ---- restart + open in browser ----
az webapp restart --name "$APP" --resource-group "$RG"
az webapp browse --name "$APP" --resource-group "$RG"