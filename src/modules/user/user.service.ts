import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // 유저 생성
  async createUser(body) {
    return body;
  }

  // 유저 조회
  async getUsers() {
    return ['aag', 'adf', 23, 'aws'];
  }

  // 유저 업데이트
  async updateUser(userId, body) {
    return 'updated!';
  }

  // 유저 삭제
  async deleteUser(userId) {
    return 'deleted!';
  }
}
