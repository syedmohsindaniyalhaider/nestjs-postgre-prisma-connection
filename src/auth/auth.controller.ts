import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
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
    this.authService.registerUser(registerUserDto);
    res
      .status(HttpStatus.CREATED)
      .send({ message: 'User Successfully Registered' });
  }
}
