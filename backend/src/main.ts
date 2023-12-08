import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// For Swagger
class APIDocument {
  static setup(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('MAD API')
      .setDescription(
        'This Application exposes some APIs for academic purposes',
      )
      .build();

    const document = SwaggerModule.createDocument(app, options, {
      ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup('docs', app, document);
  }
}

async function bootstrap() {
  // cors: get request from other domain/schema/port using HTTP-header based mechanism
  const app = await NestFactory.create(AppModule, { cors: true });
  // For Swagger
  APIDocument.setup(app);
  await app.listen(3000);
}
bootstrap();
