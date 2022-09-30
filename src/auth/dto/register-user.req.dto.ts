import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BeforeInsert } from 'typeorm';

export class RegisterUserRequestDto {
  @ApiProperty({
    example: 'codeexperts',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '******',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: '******',
  })
  @Exclude()
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}
