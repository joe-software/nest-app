import { Controller, Get, Post, Render, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}
    // Get request - /cars
    @Get()
    @Render('home-user')
    async root() {
    // route to service and await response (all entries in db) - then include as data sent to view
    let data = await this.userService.findAll()
    return {userData: data}
    }

    @Get('add')
    @Render('add-entry-user')
    emptyAddFunction(){
        
    }   

    @Get('delete')
    @Render('delete-user')
    async findAllForDeleteView() {
        // route to service and await response (all entries in db) - then include as data sent to view
        let data = await this.userService.findAll()
        return {userData: data}
    }
   


    @Post('user-post')
    addAUser(@Body() createUserDto: CreateUserDto){
        this.userService.create(createUserDto)
        return {createUserDto}
 }

    @Post('user-delete')
    deleteAUser(@Body() body: {}){
        this.userService.deleteOneUser(body)
        return {status: 'deleted'}
    }

    @Post('user-update')
    updateAUser(@Body() CreateUserDto: CreateUserDto){
        this.userService.updateOneUser(CreateUserDto)
        return  {status: 'updated'}
    }

            
    
}

