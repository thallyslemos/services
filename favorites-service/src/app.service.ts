import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { FavoriteDTO } from './dto/create-favorite.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getFavorites(): Promise<any> {
    const favorites = await this.prisma.favorites.findMany();

    return favorites;
  }

  async saveFavorite(favorite: FavoriteDTO): Promise<any> {
    const favoriteExists = await this.playerExists(favorite.id);

    if (favoriteExists) {
      throw new ConflictException(`Player alredy exist in favorites.`);
    }
    const newFavorite = await this.prisma.favorites.create({
      data: {
        id: favorite.id,
        name: favorite.name,
        team: favorite.team,
        score: favorite.score,
        avatar: favorite.avatar,
      },
    });

    return newFavorite;
  }

  async removeFavorite(id: number): Promise<any> {
    const favoriteExists = await this.playerExists(id);

    if (!favoriteExists) {
      throw new ConflictException('Dont exists in favorites');
    }

    return await this.prisma.favorites.delete({
      where: {
        id,
      },
    });
  }

  private async playerExists(id: number): Promise<boolean> {
    let favorite = null;
    let favoriteExists = false;
    try {
      favorite = await this.prisma.favorites.findUnique({
        where: {
          id,
        },
      });
    } catch (e) {
      throw new ConflictException();
    }

    if (favorite) {
      favoriteExists = true;
    }
    return favoriteExists;
  }
}
