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
let data = await this.carService.findAll()
return {carData: data}
}

// Get request - /cars/delete
@Get('delete')
// render delete.edge - within /src/views - views path added in main.ts
@Render('delete')
async test() {
// route to service and await response (all entries in db) - then include as data sent to view
let data = await this.carService.findAll()
return {carData: data}
}


    // POST /cars/car-post
    @Post('car-post')
    @Render('successful-edit')
    addACar(@Body() createCarDto: CreateCarDto){
        this.carService.create(createCarDto)
        return {status: 'added'}
 }
        

    @Post('car-delete')
    @Render('successful-edit')
    deleteACar(@Body() body: {}): {}{
        this.carService.deleteOneCar(body)
        return {status: 'deleted'}
    }

    @Post('car-update')
    @Render('successful-edit')
    updateACar(@Body() body: {}): {}{
        this.carService.updateOneCar(body)
        return {status: 'edited'}
    }
}

