import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'prisma/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  // Importação do módulo para permitir acesso às imagens
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../src', 'img'),
      serveRoot: '/img',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
