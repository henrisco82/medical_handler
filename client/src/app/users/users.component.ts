import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../login/passwordValidator';
import { UsersService } from './users.service';
import { User } from '../user';




@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
  providers: [UsersService]
})




export class UsersComponent implements OnInit { 



    users: User[];
    user: User;
    
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    phone: string;
    address: string;
    height: string;
    weight: string;
    blood_pressure: string;
   
    constructor(private usersService: UsersService){

    }

    makeRefresh(){
      let  win = (window as any);
      win.location.reload();
     }

     addUser(){
     var newUser = {
       first_name : this.first_name,
       last_name : this.last_name,
       username : this.username,
       password : this.password,
       phone : this.phone,
       address : this.address,
       height : this.height,
       weight : this.weight,
       blood_pressure : this.blood_pressure
     
     } 
     this.usersService.addUser(newUser)
       .subscribe( users => {
          this.users.push(users) ;
           this.usersService.getUsers()
            .subscribe( users => 
            this.users = users)
       });

  }


  deleteUser(id:any){
    var users = this.users;
    if (confirm("Are you sure you want to delete this user?")){
     this.usersService.deleteUser(id)
     .subscribe( data => {
       if (data.n == 1){
          for(var i = 0; i < users.length; i++){
            if (users[i]._id == id){
                  users.splice(i,1);
                  this.usersService.getUsers()
                  .subscribe( users => { 
                  this.users = users; 
            });
            }
        
          }

       }
     });
     this.makeRefresh();
    }
   
      
  }

  

   ngOnInit() {

     this.usersService.getUsers()
            .subscribe( users => { 
            this.users = users; 
      });

}
  
}
