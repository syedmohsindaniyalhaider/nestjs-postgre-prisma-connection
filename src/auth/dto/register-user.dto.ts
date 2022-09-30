import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    example: 'codeexperts',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: '******',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
