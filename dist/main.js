"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
const express = require("express");
const middleware_1 = require("./middleware");
const all_exceptions_filter_1 = require("./filters/all-exceptions-filter");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('PUSHPAK-RAIL API Docs')
        .setDescription('The PUSHPAK-RAIL API description')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors();
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(middleware_1.RequestContextMiddleware);
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    app.use('/public', express.static(path_1.join(__dirname, '..', 'public')));
    await app.listen(process.env.APP_PORT || 3017, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map