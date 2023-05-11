import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
    await app.listen(3000);
  }
  bootstrap();
}

export const viteNodeApp = NestFactory.create(AppModule);
