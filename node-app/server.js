const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => res.json({ message: 'Hello from Node.js on Azure Container Apps', host: os.hostname(), version: process.env.APP_VERSION || 'dev' }));
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => console.log(`listening on ${port}`));
