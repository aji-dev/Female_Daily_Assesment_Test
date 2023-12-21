import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator} from 'class-validator';
import { AppService } from 'src/app.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/Entity/Users';
@ValidatorConstraint({name : 'EmailExists', async:true})
@Injectable()
export class IsEmailExist implements ValidatorConstraintInterface {
    constructor( @InjectRepository(Users)
    private usersRepo : Repository<Users>) {}

    async validate(param : string, args : ValidationArguments){
        console.log(param,'param')
        const user = await this.usersRepo.findOne({
            where : {
                email : param
            }
        })

        if(!user){
            return true
        }else{
            return false
        }

    }


}


export function EmailExists(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
      registerDecorator({
        name: 'EmailExists',
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        validator: IsEmailExist,
      });
    };
  }