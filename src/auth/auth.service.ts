import {
  ForbiddenException,
  Injectable,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserRequestDto } from './dto/register-user.req.dto';
import { Response } from 'express';
import { RegisterUser } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginUserRequestDto } from './dto/login-user.req.dto';
import { ResetPasswordRequestDto } from './dto/reset-password-request.req.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async registerUser(
    @Res() res: Response,
    registerUserDto: RegisterUserRequestDto,
  ): Promise<RegisterUser> {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(registerUserDto.password, salt);
    const hashConfirmPassword = await bcrypt.hash(
      registerUserDto.confirmPassword,
      salt,
    );
    const userExist = await this.prisma.registerUser.findFirst({
      where: {
        email: registerUserDto.email,
      },
    });

    if (userExist) {
      res
        .status(HttpStatus.SEE_OTHER)
        .send({ message: 'Email already exists' });
    } else {
      registerUserDto.password = hashPassword;
      registerUserDto.confirmPassword = hashConfirmPassword;
      const userRegistered = await this.prisma.registerUser.create({
        data: {
          ...registerUserDto,
        },
      });
      res
        .status(HttpStatus.CREATED)
        .send({ message: 'User registered successfully' });
      return userRegistered;
    }
  }

  async loginUser(
    @Res() res: Response,
    loginUserReqDto: LoginUserRequestDto,
  ): Promise<RegisterUser> {
    const userExist = await this.prisma.registerUser.findFirst({
      where: {
        email: loginUserReqDto.email,
      },
    });

    if (userExist) {
      const passwordMatch = bcrypt.compareSync(
        loginUserReqDto.password,
        userExist.password,
      );
      if (passwordMatch) {
        res.status(HttpStatus.OK).send({
          message: 'Success',
        });
      } else {
        res.status(HttpStatus.UNAUTHORIZED).send({
          message: 'Password does not match',
        });
      }
    } else {
      res.status(HttpStatus.NOT_FOUND).send({
        message: 'User does not exist',
      });
    }
    return;
  }

  async resetUserPassword(
    @Res() res: Response,
    resetPasswordReqDto: ResetPasswordRequestDto,
  ): Promise<RegisterUser> {
    const userExist = await this.prisma.registerUser.findFirst({
      where: {
        email: resetPasswordReqDto.email,
      },
    });

    if (!userExist) throw new ForbiddenException('Access denied');

    if (userExist) {
      console.log(userExist);
      res.status(HttpStatus.OK).send({
        message: 'Password reset successfully',
      });
    } else {
      res.status(HttpStatus.NOT_FOUND).send({
        message: 'Email does not exist',
      });
    }

    return;
  }
}
