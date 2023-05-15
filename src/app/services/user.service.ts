import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }

  

  public addUser(user:any){
    return this._http.post(`${baseUrl}/user/save`,user);
  }

  public deleteUser(id:any){
    return this._http.delete(`${baseUrl}/user/${id}`,id);
  }

  
  
  public addAgent(agent:any){
    return this._http.post(`${baseUrl}/agent/saveAgent`,agent);
  }


  Url:string="http://localhost:3000";


  // Employee Profile

  getUserById(id: number): Observable<UserComponent> {
    return this._http.get<UserComponent>(`${this.Url}/employee/${id}`);
  }

 
  //get Request
  getRecord(tableName:any){
    const url=`${this.Url}/${tableName}`;
  return  this._http.get(url);
  }
  //delete request
  deleteRecord(tableName:any,id:any){
    const url=`${this.Url}/${tableName}/${id}`;
    return this._http.delete(url);
  }

  //post request()
  addRecord(tableName:any,emp:any){
    const url=`${this.Url}/${tableName}`;

    

    return this._http.post(url,emp);

    
  }

  //GET singlel record
  singleRecord(tableName:any,id:any){
    const url=`${this.Url}/${tableName}/${id}`;
    return this._http.get(url);
  }

  //Update Record
  updateRecord(tableName:any,data:any){
    const url=`${this.Url}/${tableName}/${data.id}`;
    return this._http.put(url,data);
  }

  signIn(CurrentUser:any){
    sessionStorage.setItem("user",CurrentUser);
  }
  signOut(){
    sessionStorage.removeItem("user");
  }

  signInEmp(CurrentEmployee:any){
    sessionStorage.setItem("employee",CurrentEmployee);
  }

signOutEmp(){
  sessionStorage.removeItem("employee");
}

}
