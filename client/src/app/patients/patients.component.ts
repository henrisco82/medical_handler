import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../user';


@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  providers: [UsersService]
})
export class PatientsComponent implements OnInit {

   id: string;
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

  updatedUser: any;

  constructor(private usersService: UsersService) {
    this.updatedUser = {};
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
             }
         
           }

        }
      });

      this.makeRefresh();
     }
    
       
   }

   editUser(user){
    this.id = user._id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.username = user.username;
    this.password = user.password;
    this.address = user.address;
    this.phone = user.phone;
    this.height = user.height;
    this.weight = user.weight;
    this.blood_pressure = user.blood_pressure;
   

   console.log(user);
}

edit(){
  this.updatedUser['id'] = this.id;
  this.updatedUser['first_name'] = this.first_name;
  this.updatedUser['last_name'] = this.last_name;
  this.updatedUser['username'] = this.username;
  this.updatedUser['password'] = this.password;
  this.updatedUser['address'] = this.address;
  this.updatedUser['phone'] = this.phone;
  this.updatedUser['height'] = this.height;
  this.updatedUser['weight'] = this.weight;
  this.updatedUser['blood_pressure'] = this.blood_pressure;


  console.log(this.updatedUser);

  this.usersService.editUser(this.updatedUser).subscribe(data => {
    console.log(data);
    this.makeRefresh();
  },(error)=>{
    console.log(error);
  });
  
}


   

  ngOnInit() {

      this.usersService.getUsers()
            .subscribe( users => { 
            this.users = users; 
      });

}

}
