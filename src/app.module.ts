import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Users } from './Entity/Users';
import { IsEmailExist } from './DTO/CustomValidator';


@Module({
  imports: [
  ConfigModule.forRoot(),      
  TypeOrmModule.forRootAsync({
    useFactory : () => ({
      type : 'mysql',
      host : process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT),
      username : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      entities : [Users],
      synchronize : false,
    })
  }),
  TypeOrmModule.forFeature([Users])
],
  controllers: [AppController],
  providers: [AppService, IsEmailExist],
})
export class AppModule {}
