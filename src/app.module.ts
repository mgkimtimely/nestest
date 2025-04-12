import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, PostModule],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
