import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getPlayers(): Promise<any> {
    const players = await this.prisma.players.findMany();

    console.log(players);
    return players;
  }
}
