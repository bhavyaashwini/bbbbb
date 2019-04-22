import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
data=[
  {userid:1,
  name:"Bhavya",
  password:"bhav12345",
  empid:1,
  manage:"",
 leave:"",
 enable:"",
 disable:"",
 salaryslip:"",
},

];
data1=[
  {userid:2,
  name:"Ashwini",
  password:"achu12345",
  empid:2,
  manage:"",
 leave:"",
 enable:"",
 disable:"",
 salaryslip:"",
},
];
data2=[
  {userid:3,
  name:"Sathi",
  password:"sathi12345",
  empid:3,
  manage:"",
 leave:"",
 enable:"",
 disable:"",
 salaryslip:"",
},
];
data3=[
  {userid:4,
  name:"Akshaya",
  password:"akshaya12345",
  empid:4,
  manage:"",
 leave:"",
 enable:"",
 disable:"",
 salaryslip:"",
},
];
data4=[
  {userid:5,
  name:"Archana",
  password:"archana12345",
  empid:5,
  manage:"",
 leave:"",
 enable:"",
 disable:"",
 salaryslip:"",
},
];
  constructor(private router:Router) { }
deleterow(d){
 const index=this.data.indexOf(d);
      this.data.splice(index);
      alert("Are Sure You Want to Delete");
    }
  
    delete(d){
      const index=this.data1.indexOf(d);
           this.data1.splice(index);
           alert("Are Sure You Want to Delete");
         }
         rowdelete(d){
          const index=this.data2.indexOf(d);
               this.data2.splice(index);
               alert("Are Sure You Want to Delete");
             }
             rawdelete(d){
              const index=this.data3.indexOf(d);
                   this.data3.splice(index);
                   alert("Are Sure You Want to Delete");
                 }
                del(d){
                  const index=this.data4.indexOf(d);
                       this.data4.splice(index);
                       alert("Are Sure You Want to Delete");
                     }
  ngOnInit() {
  }


}
