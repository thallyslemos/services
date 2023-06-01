import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';

const fakePlayers = [
  {
    name: 'Niko',
    team: 'Faze Clan',
    score: '95',
    avatar: 'img/1_niko.png',
  },
  {
    name: 'Rain',
    team: 'Faze Clan',
    score: '95',
    avatar: 'img/2_rain.png',
  },
  {
    name: 'Fer',
    team: 'Sk Gaming',
    score: '92',
    avatar: 'img/3_fer.png',
  },
];

const PrismaMock = {
  player: {
    create: jest.fn().mockReturnValue(fakePlayers[0]),
    findMany: jest.fn().mockResolvedValue(fakePlayers),
    findUnique: jest.fn().mockResolvedValue(fakePlayers[0]),
    update: jest.fn().mockResolvedValue(fakePlayers[0]),
    delete: jest.fn(),
  },
};

describe('AppController', () => {
  let prisma: PrismaService;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService, { provide: PrismaService, useValue: PrismaMock }],
    }).compile();

    service = app.get<AppService>(AppService);
    prisma = app.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllPlayers', () => {
    it('shoeld return an array of players', async () => {
      const response = await service.getPlayers();

      expect(response).toEqual(fakePlayers);
      expect(prisma.players.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.players.findMany).toHaveBeenCalledWith(/* nothing */);
    });
  });
  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
