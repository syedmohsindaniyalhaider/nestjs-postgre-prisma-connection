import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersDto } from './dto/users.dto';

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
  findAll(@Body() usersDto: UsersDto) {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): object {
    console.log(id);
    return this.userService.findOne(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User Successfully Registered',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Error',
  })
  @Post('/register')
  register(@Res() res: Response, @Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
    res
      .status(HttpStatus.CREATED)
      .send({ message: 'User Successfully Registered' });
  }
}
