import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  firstName:any;
  // lastName:any;
  userEmail:any;
  // username:any;
  // userAge:any;
  // userpwd:any;
  // city:any;
  // gender:any;

  username: any;
  userData: any;

  constructor(
    private route: ActivatedRoute,private userService:UserService,private router:Router) { }

  // ngOnInit() {
  //   const userId = this.route.snapshot.paramMap.get('id');
  //   this.userService.getUserById(this.username).subscribe(user => {
  //     this.userAge = user;
  //   });
  // }

  ngOnInit(): void {
    // this.username = this.route.snapshot.paramMap.get('username');

    this['username'] = this.route.snapshot.params['username'];

    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUserByUsername(this.username).subscribe(
      (response) => {
        this.userData = response;
        console.log(this.userData);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  // fetchData(){
  //   this.userService.getRecord("employee").subscribe((res:any)=>{
  //     console.log(res);
      
  //     this.userData=res;
  //     console.log(this.userData);
  //   })
  // }

  logout(){
    if(window.confirm("Are you sure to logout")){
      sessionStorage.removeItem("user");
      this.router.navigate(['/userlogin']);
    }
  }

}
