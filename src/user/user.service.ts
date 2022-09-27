import { Injectable } from '@nestjs/common';
import { RegisterUserDTO } from './dto/register-user.dto';

@Injectable()
export class UserService {
  private users = [];
  async findAll() {
    return [];
  }
  async register(registerUserDto: RegisterUserDTO) {
    const userDetails = {
      firstName: 'codeexperts',
      lastName: 'codeexperts',
      phoneNumber: 'codeexperts',
      landLine: '00-123-123-123',
      address: 'codeexperts, UK',
      language: 'english',
    };
    const updatedUsers = this.users.push({
      data: { ...userDetails },
    });
    console.log('Here are the users::', updatedUsers);
    // return {
    //   firstName: 'Mohsin',
    //   lastName: 'Haider',
    //   phoneNumber: '1122',
    //   landLine: '1122',
    //   address: 'H#542,Chaklala Scheme 3,Rawalpindi',
    //   language: 'urdu',
    // };
  }
}
