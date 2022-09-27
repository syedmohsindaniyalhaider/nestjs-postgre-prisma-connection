import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDTO {
  @ApiProperty({
    example: 'codeexperts',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'codeexperts',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'codeexperts',
  })
  @IsNotEmpty()
  @ApiProperty({
    example: 'codeexperts',
  })
  phoneNumber: string;

  @ApiProperty({
    example: '00-123-123-123',
  })
  @IsNotEmpty()
  landLine: string;

  @ApiProperty({
    example: 'codeexperts, UK',
  })
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: 'english',
  })
  @IsNotEmpty()
  @IsNotEmpty()
  language: string;
}
