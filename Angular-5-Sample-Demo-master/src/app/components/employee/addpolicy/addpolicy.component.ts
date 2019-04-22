import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {
message;

  constructor() { }

  ngOnInit() {
  }
  onsubmit(data){
    document.getElementById("policylist").style.display="policylist";
    this.message=[];
    for(var prop in data){
      this.message.push(data[prop]);
    }
    console.log(this.message);
  }

}
