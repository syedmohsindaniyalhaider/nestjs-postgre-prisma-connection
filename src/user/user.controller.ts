import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterUserDTO } from './dto/register-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  findAll() {
    this.userService.findAll();
  }
  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDTO) {
    this.userService.register(registerUserDto);
  }
}
