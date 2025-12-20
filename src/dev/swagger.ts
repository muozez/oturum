import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Operational Tracking Using Rapid Universal Markers - API Spec",
            version: "1.0.0",
            description: "API DOC (details will be added)"
        },
        servers: [{
            url: "http://localhost:3000"
        }]
    },
    apis: ["./src/routes/*.route.ts"]
})
