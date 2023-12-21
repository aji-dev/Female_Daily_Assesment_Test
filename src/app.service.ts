import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Users } from './Entity/Users';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private usersRepo : Repository<Users>
  ){}
  getHello(): string {
    return 'test;'
  }

  async findAll(param){
    const take = param.take || 2
    const skip = (param.page -1) * take


    const [result, totalData] = await this.usersRepo.findAndCount({
      take : take,
      skip : skip
    })

    const page = param.page
    const per_page = take
    const total = totalData
    const total_pages = total/per_page
    const data = result

    return {
      page : page,
      per_page : per_page,
      total : total,
      total_pages : total_pages,
      data :data

    }
    
  }
  async findByID(param){
    const result = await this.usersRepo.findOne({
      where : {
        id : param.id
      }
    })

    return result
  }

  async createUser(data){
    const newUser = await this.usersRepo.create({...data})
    return this.usersRepo.save(newUser)
  }

  async updateUser(data){
    const idUser = data.id
    delete data.id
   
   const updateDataUser = await this.usersRepo.update(idUser, data)
   return 'Success Updated'
  }

  async deleteUser(data){
    const deleteDataUser = await this.usersRepo.softDelete(data.id)
    console.log(deleteDataUser.affected)
    if(!deleteDataUser.affected){
      throw new BadRequestException(`Error delete id ${data.id}`)
    }else{
      return 'Success Deleted'
    }
  }
  
}


