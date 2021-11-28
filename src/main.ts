import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { environment } from './environments/environment';

// PUERTO
const PORT = environment.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  
    // Middlewares
    app.use(cors());

    const options = new DocumentBuilder()
      .setTitle('API Climate')
      .setDescription('Api para saber el clima de una ciudad por ubicación con coordenadas geograficas u nombre de ciudad!!!')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();
  
    const document = SwaggerModule.createDocument(app, options);
  
    SwaggerModule.setup('/docs', app, document, {
      swaggerOptions: {
        filter: true,
      },
    });
  
    // start express server
    await app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

}
bootstrap();
