import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  async findUserById(userId: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: +userId,
        },
      });
      return user;
    } catch (err) {
      console.log(err.message);
    }
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    return await this.prisma.user.create({
      data: {
        ...registerUserDto,
      },
    });
  }
}
