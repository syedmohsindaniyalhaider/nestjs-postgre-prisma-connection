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

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findAll() {
    this.userService.findAll();
  }
  @ApiResponse({
    status: 201,
    description: 'User Successfully Registered',
  })
  @Post('/register')
  @HttpCode(201)
  register(@Res() res: Response, @Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
    res
      .status(HttpStatus.CREATED)
      .send({ message: 'User Successfully Registered' });
    // return response.status(201).send('User Successfully Registered');
  }
}
