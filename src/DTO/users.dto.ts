import { IsEmail, IsNotEmpty, validate } from "class-validator";
import { EmailExists, IsEmailExist } from "./CustomValidator";

export class CreateUsersDto {
    @IsNotEmpty()
    first_name : string

    @IsNotEmpty()
    last_name : string

    @IsEmail()
    @IsNotEmpty()
    @EmailExists()
    email : string

    @IsNotEmpty()
    avatar
}

export class UpdateUserDto {
    @IsNotEmpty()
    id : number

    @IsNotEmpty()
    first_name : string

    @IsNotEmpty()
    last_name : string

    @IsEmail()
    @IsNotEmpty()
    email : string

    @IsNotEmpty()
    avatar
}

export class DeleteUserDto {
    @IsNotEmpty()
    id : number
}



