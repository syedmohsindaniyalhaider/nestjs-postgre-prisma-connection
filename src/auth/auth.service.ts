import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async registerUser(registerUserDto: RegisterUserDto) {
      await this.prisma.registerUser.create({
          data: {
            ...registerUserDto
        }
    });
  }
}
