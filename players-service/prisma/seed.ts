import { PrismaService } from './prisma.service';
const prisma = new PrismaService();
async function main() {
  await prisma.players.upsert({
    where: {
      name: 'Niko',
    },
    update: {},
    create: {
      name: 'Niko',
      team: 'Faze Clan',
      score: '95',
      avatar: '/static/media/1_niko.c9c1ab2a4291b1e21cb4.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Rain',
    },
    update: {},
    create: {
      name: 'Rain',
      team: 'Faze Clan',
      score: '95',
      avatar: '/static/media/2_rain.12542689d4a15eba7d39.png',
    },
  });

  await prisma.players.upsert({
    where: {
      name: 'Fer',
    },
    update: {},
    create: {
      name: 'Fer',
      team: 'Sk Gaming',
      score: '92',
      avatar: '/static/media/3_fer.6d9c0fd005680f96b6fc.png',
    },
  });

  await prisma.players.upsert({
    where: {
      name: 'Coldzera',
    },
    update: {},
    create: {
      name: 'Coldzera',
      team: 'Sk Gaming',
      score: '90',
      avatar: '/static/media/4_cold.dd10de07da27b211fa84.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Fallen',
    },
    update: {},
    create: {
      name: 'Fallen',
      team: 'Sk Gaming',
      score: '85',
      avatar: '/static/media/6_shox.f74760cf70886238a883.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Shox',
    },
    update: {},
    create: {
      name: 'Shox',
      team: 'G2',
      score: '85',
      avatar: '/static/media/6_shox.f74760cf70886238a883.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Dupreeh',
    },
    update: {},
    create: {
      name: 'Dupreeh',
      team: 'Astralis',
      score: '87',
      avatar: '/static/media/7_dupreeh.a3f817b72db9fb43b11b.png',
    },
  });

  await prisma.players.upsert({
    where: {
      name: 'Boltz',
    },
    update: {},
    create: {
      name: 'Boltz',
      team: 'Sk Gaming',
      score: '87',
      avatar: '/static/media/8_boltz.d5ddbd4ac00b4849ab04.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Gla1ve',
    },
    update: {},
    create: {
      name: 'Gla1ve',
      team: 'Faze Clan',
      score: '81',
      avatar: '/static/media/9_gla1ve.caffa8a0e5fcafefc13a.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Xyp9x',
    },
    update: {},
    create: {
      name: 'Xyp9x',
      team: 'Astralis',
      score: '81',
      avatar: '/static/media/10_xyp9x.bcd7e9a3703ae9b6e63a.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Taco',
    },
    update: {},
    create: {
      name: 'Taco',
      team: 'Sk Gaming',
      score: '74',
      avatar: '/static/media/11_taco.147bbae7fbb02515ae3d.png',
    },
  });

  await prisma.players.upsert({
    where: {
      name: 'Dev1ce',
    },
    update: {},
    create: {
      name: 'Dev1ce',
      team: 'Astralis',
      score: '80',
      avatar: '/static/media/12_dev1ce.c214341aed3dd6a28ea7.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Karrigan',
    },
    update: {},
    create: {
      name: 'Karrigan',
      team: 'Faze Clan',
      score: '78',
      avatar: '/static/media/13_karrigan.5b986313fa305c44ce01.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Apex',
    },
    update: {},
    create: {
      name: 'Apex',
      team: 'G2',
      score: '86',
      avatar: 'static/media/14_Apex.81fbdd2300fd78c9a061.png',
    },
  });
  await prisma.players.upsert({
    where: {
      name: 'Rez',
    },
    update: {},
    create: {
      name: 'Rez',
      team: 'Ninja in Pyjamas',
      score: '90',
      avatar: '/static/media/15_rez.b5e5edd278eca87e8fc2.png',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
