import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  findAll() {
    return this.userService.findAll();
  }
  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
  }
}
