import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {

  constructor(private router:Router) { }
  addpolicy(){
    this.router.navigate(['policyadd'])
  }

  ngOnInit() {
  }

}
