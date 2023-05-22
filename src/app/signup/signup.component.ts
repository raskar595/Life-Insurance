import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService:UserService,private router:Router){}

  public user={
    firstName:'',
    lastName:'',
    userEmail:'',
    username:'',
    userAge:'',
    userpwd:'',
    city:'',
    gender:''


  };

  resetForm(){
    window.location.href='signup';
  }

  getData(data:any){

    


    const empObj ={
      firstName:data.firstName,
      lastName:data.lastName,
      userEmail:data.userEmail,
      username:data.username,
      userAge:data.userAge,
      userpwd:data.userpwd,
      city:data.city,
      gender:data.gender,

    }
    this.userService.addRecord("employee",empObj).subscribe(()=>{
      window.alert("Record Added Successfully");
      this.router.navigate(['/userlogin']);
      
    })
  }


  formSubmit(){
    console.log(this.user);
    if(this.user.firstName=="" || this.user.firstName==null){
      alert("firstName is required..!");
      return;
    }
    else if(this.user.lastName=="" || this.user.lastName==null){
      alert("LastName is required..!");
      return;
    }
    else if(this.user.userEmail=="" || this.user.userEmail==null){
      alert("userEmail is required");
      return;
    }
    else if(this.user.username=="" || this.user.username==null){
      alert("UserName is required");
      return;
    }

    else if(this.user.userAge=="" || this.user.userAge==null){
      alert("userAge is required");
      return;
    }

    else if(this.user.userpwd=="" || this.user.userpwd==null){
      alert("userpwd is required");
      return;
    }

    else if(this.user.city=="" || this.user.city==null){
      alert("city is required");
      return;
    }

    else if(this.user.gender=="" || this.user.gender==null){
      alert("select the gender");
      return;
    }
    

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        
        
      }
    
      )
  }
  

}
