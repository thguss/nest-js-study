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
    const data = await this.userService.create(body);
    return data;
  }
}
