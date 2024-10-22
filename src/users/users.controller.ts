import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}
    // Get request - /cars
    @Get()
    async root() {
    // route to service and await response (all entries in db) - then include as data sent to view
    let data = await this.userService.findAll()
    return {carData: data}
    }


    @Post('user-post')
    addAUser(@Body() createUserDto: CreateUserDto){
        this.userService.create(createUserDto)
        return {status: 'added'}
 }

    @Post('user-delete')
    deleteAUser(@Body() body: {}){
        this.userService.deleteOneUser(body)
        return {status: 'deleted'}
    }

            
    
}

