import { Injectable, HttpStatus, Res } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async registerUser(@Res() res: Response, registerUserDto: RegisterUserDto) {
    const userExist = await this.prisma.registerUser.findFirst({
      where: {
        email: registerUserDto.email,
      },
    });

    if (userExist) {
      res.status(HttpStatus.SEE_OTHER).send({ message: 'User already exists' });
    } else {
      await this.prisma.registerUser.create({
        data: {
          ...registerUserDto,
        },
      });
      res
        .status(HttpStatus.CREATED)
        .send({ message: 'User registered successfully' });
    }
  }
}
