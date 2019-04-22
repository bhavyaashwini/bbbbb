import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-hrpage',
  templateUrl: './hrpage.component.html',
  styleUrls: ['./hrpage.component.css']
})
export class HrpageComponent implements OnInit {

  constructor(private router:Router) { }
hr(){
  this.router.navigate(['hr'])
}
payroll(){
  this.router.navigate(['payroll'])
}
employee(){
  this.router.navigate(['employee'])
}
benefits(){
  this.router.navigate(['benefits'])
}
Recruiting(){
  this.router.navigate(['recruiting'])
}
performance(){
  this.router.navigate(['performance'])
}
employeelist(){
  this.router.navigate(['employeelist'])
}
policylist(){
  this.router.navigate(['policylist'])
}
compensation(){
  this.router.navigate(['compensation'])
}
training(){
  this.router.navigate(['training'])
}
definingthejob(){
  this.router.navigate(['definingthejob'])
}
onboarding(){
  this.router.navigate(['onboarding'])
}
candidate(){
  this.router.navigate(['candidate'])
}
  ngOnInit() {
  }

}
