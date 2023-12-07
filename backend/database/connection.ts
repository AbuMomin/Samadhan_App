import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'models/users.model';

export default (configService: ConfigService): TypeOrmModuleOptions => {
  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    // Convert the port name to `int`
    port: +configService.get<number>('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [User],
  };

  return config;
};
