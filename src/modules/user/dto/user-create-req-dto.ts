import { IsEmail, IsString } from 'class-validator';

export class UserCreateRequestDto {
  @IsString()
  public name: string;

  @IsString()
  @IsEmail()
  email: string;
}
