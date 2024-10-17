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

    // Post request - /cars
    @Post('')
    // route to service and include req.body as param
    addACar(@Body() createCarDto: CreateCarDto){
        return this.carService.create(createCarDto)
    }

    // Delete request - /cars
    @Delete('')
    // route to service and include req.body as param
    deleteACar(@Body() body: {}){
        this.carService.deleteOneCar(body)
    }

    // Put request - /cars   
    @Put('')
    // route to service and include req.body as param
    updateACar(@Body() body: {}){
        this.carService.updateOneCar(body)
    }
}

