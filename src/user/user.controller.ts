import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AllUsersDto } from './dto/all-users.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All Users',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Get('/')
  findAllUsers(@Body() usersDto: AllUsersDto) {
    return this.userService.findAllUsers();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Get(':id')
  findUserById(@Param('id') id: number): object {
    console.log(id);
    return this.userService.findUserById(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Post('/register')
  registerUser(@Res() res: Response, @Body() registerUserDto: RegisterUserDto) {
    this.userService.registerUser(registerUserDto);
    res
      .status(HttpStatus.CREATED)
      .send({ message: 'User Successfully Registered' });
  }
}
