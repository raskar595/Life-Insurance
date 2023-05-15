import { Component,TemplateRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  emp:any;
  p:number=1;
  term:any;
  modalRef?: BsModalRef;
  constructor(private _globalSer:UserService,private route:Router){}
    ngOnInit(){
      this.fetchData();
    }

    // openModal(template: TemplateRef<any>) {
    //   this.modalRef = this.modelService.show(template);
    // }

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

    // logout

    logout(){
      if(window.confirm("Are you sure to logout")){
        sessionStorage.removeItem("user");
        this.route.navigate(['/login']);
      }
    }

}
