import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { join } from 'path';
import { Response } from 'express';
import { existsSync } from 'fs';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'ProPlayers Service';
  }

  async getPlayers(): Promise<any> {
    const players = await this.prisma.players.findMany();

    return players;
  }

  getImage(imageName: string, res: Response) {
    const imagePath = join(__dirname.replace('/dist', ''), 'img', imageName);

    if (!existsSync(imagePath)) {
      throw new NotFoundException(`Image ${imageName} not found`);
    }
    res.sendFile(imagePath);

    return HttpStatus.OK;
  }
}
