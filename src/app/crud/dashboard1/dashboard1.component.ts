import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {

  
  emp:any;
  p:number=1;
  term:any;
 
  constructor(private _globalSer:UserService){}
    ngOnInit(){
      this.fetchData();
    }

    deleteUser(id:any){
      this._globalSer.deleteUser(id).subscribe((res1:any)=>{
        alert("Record is deleted");
      })
    }

   
    
    fetchData(){
      this._globalSer.getRecord("employee").subscribe((res:any)=>{
        // console.log(res);
        
        this.emp=res;
        //console.log(this.emp);
      })
    }
    getId(id:any){
      // console.log(id);
      if(confirm(`Are you sure to delete record with id:${id}`)){

        this._globalSer.deleteRecord("employee",id).subscribe(()=>{
          window.alert("Record Deleted Successfully");
          this.fetchData();
        });
      }
    }
}
