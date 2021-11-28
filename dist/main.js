"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const timeout_interceptor_1 = require("./common/interceptors/timeout.interceptor");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cors = require("cors");
const environment_1 = require("./environments/environment");
const PORT = environment_1.environment.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionFilter());
    app.useGlobalInterceptors(new timeout_interceptor_1.TimeOutInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cors());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API Climate')
        .setDescription('Api para saber el clima de una ciudad por ubicación con coordenadas geograficas u nombre de ciudad!!!')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/docs', app, document, {
        swaggerOptions: {
            filter: true,
        },
    });
    await app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map