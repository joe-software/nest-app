import { Controller, Get, Post, Delete, Put, Body, Render } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';



@Controller('cars')
export class CarsController {
    // include functions from car.service within class - accessable as mehthods from this.carService
    constructor(private readonly carService: CarsService){}

// Get request - /cars
@Get()
// render home.edge - within /src/views - views path added in main.ts
@Render('home')
async root() {
// route to service and await response (all entries in db) - then include as data sent to view
let returnData
await this.carService.findAll().then( (data) => {
    returnData = data
})
return {carData: returnData}
}

// Get request - /cars
@Get('delete')
// render home.edge - within /src/views - views path added in main.ts
@Render('delete')
async test() {
// route to service and await response (all entries in db) - then include as data sent to view
let returnData
await this.carService.findAll().then( (data) => {
    returnData = data
})
return {carData: returnData}
}


    // POST /cars/car-post
    @Post('car-post')
    @Render('successful-post')
    addACar(@Body() createCarDto: CreateCarDto){
        this.carService.create(createCarDto)
 }
        

    @Post('car-delete')
    @Render('successful-post')
    deleteACar(@Body() body: {}){
        this.carService.deleteOneCar(body)
    }

    @Post('car-update')
    @Render('successful-post')
    updateACar(@Body() body: {}){
        this.carService.updateOneCar(body)
    }
}

