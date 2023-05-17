import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  userId:any;
  userPass:any;
  userArray:any;

  constructor(private _globalSer:UserService,private _router:Router){}

  ngOnInit(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("employee");
  }
  getUserData(){
    console.log(this.userId,this.userPass);
    this._globalSer.getRecord("users").subscribe((res)=>{
      this.userArray=res;
      console.log(this.userArray);

      const data=this.userArray.filter((items:any)=>{
        return items.uid===this.userId && items.upass===this.userPass})
        if(data.length >0){
          this._globalSer.signIn(this.userId);
          this._router.navigate(['/dashboard']);
        }
        else{
          window.alert("invalid credential..!");
          this.userId="";
          this.userPass="";

        }
    })

    // EmployeeLogin

    // console.log(this.userId,this.userPass);
    // this._globalSer.getRecord("employee").subscribe((res)=>{
    //   this.userArray=res;
    //   console.log(this.userArray);

    //   const data=this.userArray.filter((items:any)=>{
    //     return items.username===this.userId && items.userpwd===this.userPass})
    //     if(data.length >0){
    //       this._globalSer.signIn(this.userId);
    //       this._router.navigate(['/dashboard']);
    //     }
    //     else{
    //       window.alert("invalid credential..!");
    //       this.userId="";
    //       this.userPass="";

    //     }
    // })


  }

}
