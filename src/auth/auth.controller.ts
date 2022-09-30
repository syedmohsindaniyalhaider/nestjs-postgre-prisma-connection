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
    status: HttpStatus.SEE_OTHER,
    description: 'User already exists',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Post('/register')
  registerUser(@Res() res: Response, @Body() registerUserDto: RegisterUserDto) {
    this.authService.registerUser(res, registerUserDto);
  }
}
