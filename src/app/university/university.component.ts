import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {

  unviersityDataList: any[] = [];
  errorMessage: any;
  showTable: boolean = false;
  
  student: any = {
    id: 1,
    name: 'john'
  }

  university: any = {
    countryCode: 'US',
    country: 'United States'
  }
  //university['status'] = 'open';
  // university: any = {
  //   countryCode: 'US',
  //   country: 'United States',
  //   status: 'open'
  // }

  ids: number[] = [];
  //this.ids.push(101) - [101]
  emp = [
    { id: 1, name: 'tom' }
  ];
  //this.emp.push( {id:2, name: 'John'}) - 
  //  [
  //   {id:1, name: 'tom'},
  //   {id:2, name: 'John'}
  // ]
  //this.emp.length = 2

  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {

  }

  getAllData() {
    this.universityService.universityList().subscribe(
      (sucessResponse: any) => {
        sucessResponse.forEach((university) => {
          console.log(university.country);
          if (university.country == "India") {

          }

        })


      },
      (errorResponse: any) => {

      },

    )
    console.log();



  }

  listOfUniversities() {
    this.universityService.universityList().subscribe(
      (sucessResponse: any) => {
        this.showTable = true;
        sucessResponse.forEach((university) => {
          // if(university.country === 'United States' || university.domains.length === 2) {
          //   this.unviersityDataList.push(university);
          // }
          if (university.country === 'United States' || university.country === 'India') {
            university['status'] = 'open';
            this.unviersityDataList.push(university);
          } else {
            university['status'] = 'close';
            this.unviersityDataList.push(university);
          }

        });
        console.log(this.unviersityDataList);
      },
      (errorResponse: any) => {
        this.errorMessage = errorResponse.message;
        console.log(errorResponse);

      }
    );
    console.log("Universities List");


  }



}

// t && t && t && t = t
// t && f = f
// f && t = f
//f && f = f

// t || t = t
// t || f = t
// f || t = t
// f || f = f


/* 
observable is part of rxjs  
used for dealing with async code 

subscribe(
  (next)=>{},
  (error)=>{},
  )
 3  function

*/