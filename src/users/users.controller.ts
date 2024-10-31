import { Controller, Get, Post, Render, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, IdUserDto, UpdateUserDto } from './dto/user-app.dto';

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
    async findAllForDeleteView(@Query() idUserDto: IdUserDto) {
         // route to service and await response entry for ID in query - then include as data sent to view
        let data = await this.userService.findUserById(idUserDto)
        return {userData: data}
    }

    @Get('update')
    @Render('update-user')
    async findAllForUpdateView(@Query() idUserDto: IdUserDto) {
        // route to service and await response entry for ID in query - then include as data sent to view
        let data = await this.userService.findUserById(idUserDto)
        return {userData: data}
    }
   


    @Post('user-post')
    @Render('successful-edit-user')
    addAUser(@Body() createUserDto: CreateUserDto){
        this.userService.create(createUserDto)
        return {status: 'added'}
 }

    @Post('user-delete')
    @Render('successful-edit-user')
    deleteAUser(@Body() idUserDto: IdUserDto){
        this.userService.deleteOneUser(idUserDto)
        return {status: 'deleted'}
    }

    @Post('user-update')
    @Render('successful-edit-user')
    updateAUser(@Body() updateUserDto: UpdateUserDto){
        this.userService.updateOneUser(updateUserDto)
        return  {status: 'edited'}
    }

            
    
}

