import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 생성
  @Post() //* POST localhost:3000/user
  async createUser(@Body() body) {
    const data = await this.userService.createUser(body);
    return data;
  }

  // 유저 조회
  @Get() //* GET localhost:3000/user
  async getUsers() {
    const data = await this.userService.getUsers();
    return data;
  }

  // 유저 업데이트
  @Patch('/:userId') //* PATCH localhost:3000/user/:userId
  async updateUser(@Param() userId: number, @Body() body) {
    const data = await this.userService.updateUser(userId, body);
    return data;
  }

  // 유저 삭제
  @Delete('/:userId') //* DELETE localhost:3000/user/:userId
  async deleteUser(@Param() userId: number) {
    const data = await this.userService.deleteUser(userId);
    return data;
  }
}
