import { IsString, IsNumber, IsNumberString} from "class-validator";
export class CreateCarDto {
  
    @IsString()
    brand: string; 

    @IsString()
    model: string;

    @IsString()
    date: string; 

    @IsString()
    colour: string;
  }

  export class IdCarDto {
  
    @IsNumberString()
    id: string;
  }

  export class UpdateCarDto {
  
    @IsString()
    brand: string; 

    @IsString()
    model: string;

    @IsString()
    date: string; 

    @IsString()
    colour: string;

    @IsNumberString()
    id: string;
  }
  