import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Players } from '@prisma/client';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('players')
  getAll(): Promise<Players[]> {
    return this.appService.getPlayers();
  }
  @Get('img/:imageName')
  getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    return this.appService.getImage(imageName, res);
  }
}
