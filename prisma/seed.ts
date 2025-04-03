import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: { name: 'Alice' },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => void prisma.$disconnect());

//ㅇㅇㄴㄹ
