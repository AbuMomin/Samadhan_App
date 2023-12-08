import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class RegUser {
  @ApiProperty({
    name: 'first_name',
    type: String,
    example: 'Abu',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    name: 'last_name',
    type: String,
    example: 'Momin',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    name: 'email',
    type: String,
    example: 'win@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    type: String,
    example: '1234',
  })
  password: string;

  @ApiProperty({
    name: 'role',
    description: '1 = user ____ 2 = Professional',
    type: String,
    example: '1',
  })
  @IsIn([1, 2], { message: 'Role must be either 1 or 2' })
  role: number;

  @ApiProperty({
    name: 'phone',
    type: String,
    example: '01754132131',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    name: 'location_tag',
    type: String,
    example: 'Agargaon',
  })
  @IsOptional()
  @IsString()
  location_tag: string;

  @ApiProperty({
    name: 'address',
    type: String,
    example: '145, Agargaon, Dhaka-1207',
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    name: 'nid',
    type: String,
    example: '123457845642',
  })
  @MaxLength(19, { message: 'NID must not exceed 19 characters' })
  nid: string;

  //   no expertise for user

  @ApiProperty({
    name: 'description',
    type: String,
    example: 'I have plenty of House hold work',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    name: 'image_path',
    type: String,
    example: '',
  })
  @IsOptional()
  @IsString()
  image_path: string;
}
