import { Controller, Get, Param, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AllUsersDto } from './dto/all-users.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success: return all users',
    type: AllUsersDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Get('/')
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success: return specific user',
    type: UserDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Get(':userId')
  findUserById(@Param('userId') userId: number): object {
    console.log(userId);
    return this.userService.findUserById(userId);
  }
}
