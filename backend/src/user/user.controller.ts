/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/users.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
