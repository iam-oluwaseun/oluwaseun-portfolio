# Docker Build and Run Commands

## Build the Docker Image

```bash
docker build -t oluwaseun-portfolio .
```

## Run the Container

### Basic Run (Port 80)
```bash
docker run -d -p 8080:80 --name oluwaseun-portfolio oluwaseun-portfolio
```

### Run with Custom Port
```bash
docker run -d -p 3000:80 --name oluwaseun-portfolio oluwaseun-portfolio
```

### Run with Auto-restart
```bash
docker run -d -p 8080:80 --name oluwaseun-portfolio --restart unless-stopped oluwaseun-portfolio
```

## Useful Commands

### View Running Containers
```bash
docker ps
```

### View Container Logs
```bash
docker logs oluwaseun-portfolio
```

### Follow Logs (Real-time)
```bash
docker logs -f oluwaseun-portfolio
```

### Stop Container
```bash
docker stop oluwaseun-portfolio
```

### Start Container
```bash
docker start oluwaseun-portfolio
```

### Remove Container
```bash
docker rm oluwaseun-portfolio
```

### Remove Container and Image
```bash
docker rm oluwaseun-portfolio
docker rmi oluwaseun-portfolio
```

### Access Container Shell
```bash
docker exec -it oluwaseun-portfolio sh
```

## Access the Application

After running the container, access your portfolio at:
- **http://localhost:8080** (if using port 8080)
- **http://localhost:3000** (if using port 3000)

## Quick Start (All-in-One)

```bash
# Build and run in one go
docker build -t oluwaseun-portfolio . && docker run -d -p 8080:80 --name oluwaseun-portfolio oluwaseun-portfolio
```

