import { Injectable } from '@nestjs/common';
import { User } from 'models/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegUser } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addUser(userReg: RegUser): Promise<boolean> {
    try {
      const newUser = this.userRepository.create(userReg);
      await this.userRepository.save(newUser);
      return true;
    } catch (error) {
      console.error('Error adding user:', error);
      return false;
    }
  }
}
