import { IsEmail, IsString } from 'class-validator';

export class CreateContactUsDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public fullname: string;
}
