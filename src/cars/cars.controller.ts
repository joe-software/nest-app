import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
// import { get } from 'mongoose';

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
    create(@Body() createCarDto: CreateCarDto ):string {
        
        this.carService.create(createCarDto)
        return (`Successful post request' ${this.carService.findAll()}`)
    }
}

