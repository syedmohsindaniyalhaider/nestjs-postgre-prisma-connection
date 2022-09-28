import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersDto } from './dto/users.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiResponse({
    status: 200,
    description: 'All Users',
  })
  @ApiResponse({
    status: 400,
    description: 'Error',
  })
  @Get('/')
  findAll(@Body() usersDto: UsersDto) {
    return this.userService.findAll();
  }
  @ApiResponse({
    status: 201,
    description: 'User Successfully Registered',
  })
  @ApiResponse({
    status: 400,
    description: 'Error',
  })
  @Post('/register')
  // @HttpCode(201)
  register(@Res() res: Response, @Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
    res
      .status(HttpStatus.CREATED)
      .send({ message: 'User Successfully Registered' });
  }
}
