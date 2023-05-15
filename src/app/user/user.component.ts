import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  firstName:any;
  lastName:any;
  userEmail:any;
  username:any;
  userAge:any;
  userpwd:any;
  city:any;
  gender:any;

  

  constructor(
    private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.username).subscribe(user => {
      this.userAge = user;
    });
  }

  

}
