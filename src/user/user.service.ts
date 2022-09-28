import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async register(registerUserDto: RegisterUserDto) {
    return await this.prisma.user.create({
      data: {
        ...registerUserDto,
      },
    });
  }
}
