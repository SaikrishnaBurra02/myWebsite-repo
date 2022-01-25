import { Component, Input, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent implements OnInit {

  // @Input() universityListData:any;

  allDataUniversities:any[]=[];

  constructor(private getServiceService:GetServiceService) { }

  ngOnInit(): void {
    this.getServiceService.universityDataSubject.subscribe((data: any) =>{
      this.allDataUniversities = data;
      console.log(data);
    })
  }

}
