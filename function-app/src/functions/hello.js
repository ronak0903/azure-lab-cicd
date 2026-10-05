const { app } = require('@azure/functions');
app.http('hello', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'hello',
  handler: async () => ({ jsonBody: { message: 'Hello from Function App hosted on Azure Container Apps', time: new Date().toISOString() } })
});
