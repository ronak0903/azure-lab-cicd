# App repo (push to GitHub, build with Azure DevOps)
- react-app/        React (Vite) -> Pipeline 1
- node-app/         Node.js + Dockerfile -> Pipelines 2 and 4
- function-app/     Node Azure Function container -> Pipeline 3
- pipelines/        Azure DevOps YAML (Pipelines > New > GitHub > Existing Azure Pipelines YAML file)
- docker-exercises/ Docker basics
Service connections required: sc-lab-sub-a, sc-lab-sub-b
