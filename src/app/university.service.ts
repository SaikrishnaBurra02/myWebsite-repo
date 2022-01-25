import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetServiceService } from './component-a/get-service.service';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  allUniversities: any[] = [];
  showTable: boolean = false;

  constructor(private http: HttpClient, private getServiceSevice:GetServiceService) {

  }

  universityList(countryName: string) { // universityList(india)
    console.log(countryName)
    console.log("University service excuted");
    return this.http.get(`http://universities.hipolabs.com/search?country=${countryName}`)

  }

  getAllUniversities() {
    return this.http.get("http://universities.hipolabs.com/search")
  }

  

  universities(countryName: string) { // universityList(india)
    console.log("2")
    console.log("University service excuted");
    this.http.get(`http://universities.hipolabs.com/search?country=${countryName}`).subscribe(
      (successResponse: any) => {
        console.log("3");
        

        this.showTable = true;
        this.getServiceSevice.universityDataLists(successResponse);
      },
      (errorResponse: any) => {

      }
    );// india

  }


}



// observable method
// get(url:string){}
// GET : TO GET DATA
// PUT : TO UPDATE  DATA
// POST : TO CREATE THE DATA
// DELETE : TO DELETE THE DATA
// CRUD FUNCTIONLITY: CREATE, DELETE, UPDATE


