/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/users.model';
import { RegUser } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('regUser')
  registerUser(@Body() userReg: RegUser): Promise<boolean> {
    return this.userService.addUser(userReg);
  }
}
