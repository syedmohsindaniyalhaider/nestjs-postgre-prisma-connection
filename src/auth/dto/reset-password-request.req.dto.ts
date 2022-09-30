import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordRequestDto {
  @ApiProperty({
    example: 'codeexperts@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
