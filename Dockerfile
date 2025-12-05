# ---------- Stage 1: Build the React App ----------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files for dependency install
COPY package*.json ./

# Install dependencies (cached layer if unchanged)
RUN npm ci --omit=dev || npm install --omit=dev

# Copy all project files
COPY . .

# Build production bundle (/app/build)
RUN npm run build


# ---------- Stage 2: Serve App with Nginx ----------
FROM nginx:1.27-alpine

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# (Optional) Custom Nginx config:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
