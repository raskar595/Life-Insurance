import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

username:any;
 
  userpwd:any;
  userArray:any;

  constructor(private _globalSer:UserService,private _router:Router){}

  ngOnInit(){
    
    sessionStorage.removeItem("employee");
  }
  getUserData(){
    console.log(this.username,this.userpwd);
    this._globalSer.getRecord("employee").subscribe((res)=>{
      this.userArray=res;
      //console.log(this.userArray);

    

      const data=this.userArray.filter((items:any)=>{
        return items.username==this.username && items.userpwd==this.userpwd})
        if(data.length >0){
          this._globalSer.signInEmp(this.username);
          this._router.navigate(['/user']);
        }
        else{
          window.alert("invalid credential..!");
          this.username="";
          this.userpwd="";

        }
    })

  }

}
