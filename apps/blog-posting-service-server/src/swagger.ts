import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("BlogPostingService")
  .setDescription(
    'Service for blog creation and management with GraphQL API and Kafka integration.\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "BlogPostingService",
};