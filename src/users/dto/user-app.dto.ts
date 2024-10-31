import { IsString, IsNumber, IsNumberString } from "class-validator";

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    age: number;

    @IsString()
    bio: string;

    @IsString()
    permission: string;
    
  }

export class IdUserDto {
  
    @IsNumberString()
    id: string; 
  }


  export class UpdateUserDto {

    @IsString()
    username: string;

    @IsString()
    age: number;

    @IsString()
    bio: string;

    @IsString()
    permission: string;

    @IsNumberString()
    id: string; 

  }
  