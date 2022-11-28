import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: {
      id: 1
    },
    update: {},
    create: {
      name: 'Administrador',
      username: 'admin',
      password: 'bpf54600jf123',
      admin: true,
    },
  });

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
};
