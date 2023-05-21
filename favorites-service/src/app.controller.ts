import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FavoriteDTO } from './dto/create-favorite.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('favorites')
  getAll(): Promise<any> {
    return this.appService.getFavorites();
  }
  @Post('create-favorite') 
  saveFavorite(@Body() favorite: FavoriteDTO): Promise<any> {
    return this.appService.saveFavorite(favorite);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.removeFavorite(+id);
  }
}
