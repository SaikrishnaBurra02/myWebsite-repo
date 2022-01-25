import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/university.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  country:string;
  // allUniversities:any[]=[];
  // showTable:boolean=false;

  constructor(private universityService:UniversityService) { }

  ngOnInit(): void {
  }

  navigateToUniversity(){
    console.log("1");
    
    this.universityService.universities(this.country);


  }

}
