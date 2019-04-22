import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import { CompensationComponent } from '../compensation/compensation.component';
@Component({
  selector: 'app-addcompensation',
  templateUrl: './addcompensation.component.html',
  styleUrls: ['./addcompensation.component.css']
})
export class AddcompensationComponent implements OnInit {
 
  constructor(private router:Router) { }
onsubmit(){
  this.router.navigate(['compensation']);
  
  return false;

}
addcompensation(d){
  d.data.push(d.addcompensation)
  d.addcompensation={};
  d.router.navigate(['compensation']);
}

  ngOnInit() {
  }

 
}
