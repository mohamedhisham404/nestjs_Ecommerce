import { IsEmail, IsEnum, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, 30)
  name: string;

  @IsEmail()
  email: string;

  @Length(3, 20)
  password: string;

  @IsEnum(['Admin', 'User'], { message: 'Role must be either Admin or User' })
  role: string;

  avatar: string;

  age: number;

  phoneNumber: string;

  address: string;

  active: boolean;

  verificationCode: string;

  @IsEnum(['male', 'female'], {
    message: 'Gnder must be either male or female',
  })
  gender: string;
}
