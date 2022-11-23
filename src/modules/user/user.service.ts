import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserCreateRequestDto } from './dto/user-create-req-dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: UserCreateRequestDto) {
    await this.prismaService.user.create({
      data: {
        userName: createUserDto.name,
        email: createUserDto.email,
      },
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany({});
  }
}
