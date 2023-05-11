import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [UserService, PostService],
})
export class AppModule {}
