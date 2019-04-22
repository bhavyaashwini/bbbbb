import { Component } from '@angular/core';
import {ToastrService}from 'ngx-toastr';
@Component({
  selector: 'employee-user',
  templateUrl: './employee-user.component.html',
  styleUrls: ['./employee-user.component.css']
})
export class employeeuserComponent {
  // editField: string;
  message: string;
  skill:any = "angular";
  range:any = "50";
  rating:any;
  experience:any;
  date:any;

  
   addflag:boolean = false;

  personList: Array<any> = [
    { id: 1, employeeskill: 'angular', progress: 30, rating: '7/10', totalexperience: '2yrs', year: '2015' },
    { id: 2, employeeskill: 'html', progress: 45, rating: '9/10', totalexperience: '5yrs', year: '2011' },
    { id: 3, employeeskill: 'nodejs', progress: 26, rating: '5/10', totalexperience: '1yrs', year: '2018' },

  ];

  // awaitingpersonList: Array<any> = [
  // { id: 6, employeeskill: 'George Vega', age: 28, rating: 'Classical', totalexperience: 'Russia', year: 'Moscow' },
  //{ id: 7, employeeskill: 'Mike Low', age: 22, rating: 'Lou', totalexperience: 'USA', year: 'Los Angeles' },
  //{ id: 8, employeeskill: 'John Derp', age: 36, rating: 'Derping', totalexperience: 'USA', year: 'Chicago' },

  //];

  // updateList(id: number, property: string, event: any) {
  // const editField = event.target.textContent;
  // this.personList[id][property] = editField;
  //}

  //remove(id: any) {
  //this.awaitingpersonList.push(this.personList[id]);
  //this.personList.splice(id, 1);
  //}

  //add() {
  //if (this.awaitingpersonList.length > 0) {
  //const person = this.awaitingpersonList[0];
  //this.personList.push(person);
  //this.awaitingpersonList.splice(0, 1);
  //}
  //}
  deleteFieldValue(index) {
    this.personList.splice(index, 1);
    alert("Are Sure You Want to Delete");
    
}
  addskill() {
    // var temp = {
     //id ="",
     //employeeskill="",
     //age="",
    // rating="",
   //totalexperience="",
     //year=""};
    
    //this.personList.push(temp);
    this.addflag = true;
  }
  
  editEmployee(emp: any) {
    this.personList = emp;
}

  save(){
    let tempObj:any = {}
    tempObj.id = this.personList.length + 1;
    tempObj.employeeskill = this.skill;
    tempObj.progress = this.range;
    tempObj.rating = this.rating;
    tempObj.totalexperience = this.experience;
    tempObj.year  = this.date;
    this.personList.push(tempObj);
    this.addflag = false;
    this.skill = "angular";
    this.range = "50";
    this.rating = "";
    this.experience = "";
    this.date = "";
    
  }

  
  cancel(id){
    this.personList = null;
  }

  // var temp = { id: this.personList.length + 1, employeeskill: "", age: "", rating: "", totalexperience: "", year: "" }
    // this.personList.push(temp);
  
  }

 

    //changeValue(id: number, property: string, event: any) {
     //this.editField = event.target.textContent;
    //}
