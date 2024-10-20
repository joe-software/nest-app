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
@Render('home-car')
async root() {
// route to service and await response (all entries in db) - then include as data sent to view
let data = await this.carService.findAll()
return {carData: data}
}

// Get request - /cars/delete-car
@Get('delete')
// render delete.edge - within /src/views - views path added in main.ts
@Render('delete-car')
async deleteCarView() {
// route to service and await response (all entries in db) - then include as data sent to view
let data = await this.carService.findAll()
return {carData: data}
}

// Get request - /cars/add-car
@Get('add')
// render add-entry-car.edge - within /src/views - views path added in main.ts
@Render('add-entry-car')
emptyFunction(): undefined{

}

// Get request - /cars/update-car
@Get('update')
// render delete.edge - within /src/views - views path added in main.ts
@Render('update-car')
async updateCarView() {
// route to service and await response (all entries in db) - then include as data sent to view
let data = await this.carService.findAll()
return {carData: data}
}




    // POST /cars/car-post
    @Post('car-post')
    @Render('successful-edit-car')
    addACar(@Body() createCarDto: CreateCarDto){
        this.carService.create(createCarDto)
        return {status: 'added'}
 }
        

    @Post('car-delete')
    @Render('successful-edit-car')
    deleteACar(@Body() body: {}): {}{
        this.carService.deleteOneCar(body)
        return {status: 'deleted'}
    }

    @Post('car-update')
    @Render('successful-edit-car')
    updateACar(@Body() body: {}): {}{
        this.carService.updateOneCar(body)
        return {status: 'edited'}
    }
}

