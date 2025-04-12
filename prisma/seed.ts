import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('your-password', 10);

  await prisma.user.create({
    data: {
      email: 'your-email@example.com',
      password: hashedPassword,
      name: 'Your Name',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => void prisma.$disconnect());
