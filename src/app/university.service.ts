import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UniversityService {


  constructor(private http: HttpClient) {

   }

  universityList(){
    
    console.log("University service excuted");
    return this.http.get("http://universities.hipolabs.com/search")
    
  }

  getAllUniversities(){
   return this.http.get("http://universities.hipolabs.com/search")
  }

}

// observable method
// get(url:string){}
// GET : TO GET DATA
// PUT : TO UPDATE  DATA
// POST : TO CREATE THE DATA
// DELETE : TO DELETE THE DATA
// CRUD FUNCTIONLITY: CREATE, DELETE, UPDATE


