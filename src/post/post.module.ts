import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PostService, PrismaService],
})
export class PostModule {}
