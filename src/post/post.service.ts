import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  // 게시글 생성
  async create(createPostDto: CreatePostDto, authorId: number) {
    return await this.prisma.post.create({
      data: {
        ...createPostDto,
        authorId,
      },
    });
  }

  // 모든 게시글 조회
  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        author: true, // 작성자 정보도 함께 가져오기
      },
    });
  }

  // 특정 게시글 조회
  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  // 게시글 수정
  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  // 게시글 삭제
  async remove(id: number) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
