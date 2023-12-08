/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/users.model';
import { LoginDTO, RegUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('regUser')
  registerUser(@Body() userReg: RegUserDTO): Promise<boolean> {
    return this.userService.addUser(userReg);
  }

  @Post('login')
  async loginUser(
    @Body() userLoginData: LoginDTO,
  ): Promise<{ userID: number }> {
    const userID = await this.userService.loginUser(userLoginData);
    return { userID };
  }

  @Get('all-professionals')
  getAllProfessional() {
    return this.userService.getAllProfessionals();
  }

  @Get('search-professionals')
  getSearchedProfessionals(@Query('searchText') searchText: string) {
    return this.userService.getSearchedProfessionals(searchText);
  }

  @Get('professional')
  getProfessionalById(@Query('proID') professionalUserID: number) {
    return this.userService.getProfessionalById(professionalUserID);
  }
}
