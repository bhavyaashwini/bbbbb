import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { employeeService } from '../../../services/employee/employee.service';
@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent implements OnInit {
   
  username:string;
  empid:number;
  salrange:number;
  annulincome:number;
  tax:number;
  loan:string;
  preannual:number;
  ins:number;
   data=[
    {username:"Bhavya",
      empid:1,
    salRange:30000,
   annulIncome:200000,
   tax:2,
   loans:"homeloan",
   preannul:10000,
   ins:"life insurance",

  },
  {username:"Ashwini",
      empid:2,
    salRange:30000,
   annulIncome:200000,
   tax:3,
   loans:"personal loan",
   preannul:10000,
   ins:"health insurance",

  },
  {username:"Sathi",
      empid:3,
    salRange:30000,
   annulIncome:200000,
   tax:3,
   loans:"home loan",
   preannul:10000,
   ins:"vehicle insurance",

  },
  ];
  
  
 addrow(d){
   d.data.push({
     username:d.username,
     empid:d.empid,
     salrange:d.salrange,
     annulincome:d.annulincome,
     tax:d.tax,
     loans:d.loans,
     preannual:d.preannual,
     ins:d.ins

   })
 }
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  

}
