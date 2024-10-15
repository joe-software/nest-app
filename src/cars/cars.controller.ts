import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';


@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}

    // GET /cars
    @Get('')
    findAllCarData():{} {
        return this.carService.findAll()
    }

    // POST /cars
    @Post('')
    create(@Body() createCarDto: CreateCarDto){
        return this.carService.create(createCarDto)
    }

    @Delete('')
    deleteACar(@Body() body: {}){
        this.carService.deleteOneCar(body)
    }
}

