import { Controller, Get, Param, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { BodyParamDecorator } from './CustomDecorators/CustomDecorator';
import { CreateUsersDto, UpdateUserDto,DeleteUserDto } from './DTO/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@BodyParamDecorator() body  ) {
  //   return this.appService.findAll(body);

  // }
  @Get()
  getData(@Query()query){
    return this.appService.findAll(query)
  }
  @Get('/:id')
  getDataID(@Param()param){
    return this.appService.findByID(param)
  }

  @Post('/user')
  createUser(@Body()data:CreateUsersDto){
    return this.appService.createUser(data)
  }

  @Put('/user/:id')
  updateUser(@BodyParamDecorator() data : UpdateUserDto){
    return this.appService.updateUser(data)
  }

  @Delete('/user/:id')
  deleteUser(@Param()data : DeleteUserDto){
    return this.appService.deleteUser(data)
  }
}
