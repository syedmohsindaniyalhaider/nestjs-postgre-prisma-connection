import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterUser } from '@prisma/client';
import { Response } from 'express';
import { AuthService } from './auth.service';
import {
  LoginUserRequestDto,
  RegisterUserRequestDto,
  ResetPasswordRequestDto,
} from './dto';
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
    description: 'Email already exists',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Error',
  })
  @Post('/register')
  async registerUser(
    @Res() res: Response,
    @Body() registerUserReqDto: RegisterUserRequestDto,
  ): Promise<RegisterUser> {
    return await this.authService.registerUser(res, registerUserReqDto);
  }
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password does not match',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User does not exist',
  })
  @Post('/login')
  async loginUser(
    @Res() res: Response,
    @Body() loginUserReqDto: LoginUserRequestDto,
  ): Promise<RegisterUser> {
    return await this.authService.loginUser(res, loginUserReqDto);
  }

  @Post('/reset-password')
  async resetUserPassword(
    @Res() res: Response,
    @Body() resetPasswordReqDto: ResetPasswordRequestDto,
  ): Promise<RegisterUser> {
    return await this.authService.resetUserPassword(res, resetPasswordReqDto);
  }
}
