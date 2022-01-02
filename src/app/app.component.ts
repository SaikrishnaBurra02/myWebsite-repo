import { sanitizeIdentifier } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutorial';
  studentName:string = "john";
  studentlist:string[]=["Sam","David","Ram"];
  employeeId:number = 12345;
  employeeName:string="179793ghts";
  employeeStatus:boolean = true;

  employeeList:{id:number,name:string}={
    id:12345,
    name:"pete",

  }

  studentID(){
  this.studentName = "pete";
  this.studentlist = ["john", "Sai", "warner"];
  console.log(this.studentlist);
  console.log(this.studentName);
  }

  studentSearch(){
  console.log("function is triggered");
  }

  angularTraining(){
    this.title = "Angular Training - 50/hrs";
  }

  reactTraining(){
    this.title = "React Training - 60/hrs";
  }

  vueTraining(){
    this.title = "Vue Training - 70/hrs";
  }

  training(traingType:string){
    this.title = traingType;

  }
}
