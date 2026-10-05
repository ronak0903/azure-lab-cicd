# Docker basics - hands-on (run from repo root)
1. Hello world: `docker run hello-world`
2. Web server: `docker run -d -p 8080:80 --name web nginx` -> http://localhost:8080 ; `docker logs web` ; `docker stop web && docker rm web`
3. Build your image: `docker build -t nodeapp:v1 node-app` ; `docker images`
4. Run it: `docker run -d -p 3000:80 --name n1 nodeapp:v1` ; `curl localhost:3000/health`
5. Env vars: `docker run -d -p 3001:80 -e APP_VERSION=v2 nodeapp:v1` ; `curl localhost:3001`
6. Exec inside: `docker exec -it n1 sh` -> `ls`, `exit`
7. Inspect: `docker ps -a`, `docker inspect n1`, `docker stats --no-stream`
8. Push to ACR: `az acr login -n acrlabcinx7k2` ; `docker tag nodeapp:v1 acrlabcinx7k2.azurecr.io/nodeapp:manual1` ; `docker push acrlabcinx7k2.azurecr.io/nodeapp:manual1`
9. Clean up: `docker rm -f $(docker ps -aq)` ; `docker image prune -a`
