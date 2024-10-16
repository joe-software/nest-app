import { Controller, Get, Post, Delete, Put, Body, Render } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Edge } from 'edge.js'



@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}

//     @Get()
//     @Render('home')
//     async root() {
//     let returnData
//     await this.carService.findAll().then( (data) => {
//         returnData = data
//     })
//     return {carData: returnData}
//   }

@Get()
@Render('home')
async root() {
let returnData
await this.carService.findAll().then( (data) => {
    returnData = data
})
return {carData: returnData}
}

    // POST /cars
    @Post('')
    addACar(@Body() createCarDto: CreateCarDto){
        return this.carService.create(createCarDto)
    }

    @Delete('')
    deleteACar(@Body() body: {}){
        this.carService.deleteOneCar(body)
    }

    @Put('')
    updateACar(@Body() body: {}){
        this.carService.updateOneCar(body)
    }
}

