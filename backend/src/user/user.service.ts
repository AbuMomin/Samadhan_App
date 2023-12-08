import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'models/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { RegUserDTO, LoginDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addUser(userReg: RegUserDTO): Promise<boolean> {
    try {
      const newUser = this.userRepository.create(userReg);
      await this.userRepository.save(newUser);
      return true;
    } catch (error) {
      console.error('Error adding user:', error);
      return false;
    }
  }

  async loginUser(userLoginData: LoginDTO): Promise<number> {
    const { email, password } = userLoginData;

    const user = await this.userRepository.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new NotFoundException('Email or Password is incorrect!');
    }
    return user.id;
  }

  async getAllProfessionals(): Promise<User[]> {
    return this.userRepository.find({
      where: { role: 2 },
      select: [
        'id',
        'first_name',
        'last_name',
        'email',
        'role',
        'phone',
        'location_tag',
        'address',
        'expertise',
        'description',
        'image_path',
      ],
    });
  }

  async getSearchedProfessionals(searchText: string): Promise<User[]> {
    return this.userRepository.find({
      where: { role: 2, expertise: ILike(`%${searchText}%`) },
      select: [
        'id',
        'first_name',
        'last_name',
        'email',
        'role',
        'phone',
        'location_tag',
        'address',
        'expertise',
        'description',
        'image_path',
      ],
    });
  }
}
