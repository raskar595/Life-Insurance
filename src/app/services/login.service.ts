import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApi } from '../../app/shared/api/rest-api';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  api = new RestApi();
  constructor(private httpClient: HttpClient) { }
  // signIn(CurrentUser:any){
  //   sessionStorage.setItem("user",CurrentUser);
  // }

}
