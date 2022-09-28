import { ApiProperty } from '@nestjs/swagger';
import { isArray, IsNotEmpty, IsString } from 'class-validator';
import { RegisterUserDto } from './register-user.dto';

class UserDto {
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
  landline: string;

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

export class AllUsersDto {
  @ApiProperty({
    type: UserDto,
    isArray: true,
  })
  users: UserDto[];
}
