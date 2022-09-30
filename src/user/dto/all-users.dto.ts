import { ApiProperty } from '@nestjs/swagger';
import { isArray, IsNotEmpty, IsString } from 'class-validator';
import { UserDto } from './user.dto';


export class AllUsersDto {
  @ApiProperty({
    type: UserDto,
    isArray: true,
  })
  users: UserDto[];
}
