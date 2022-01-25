import { Injectable } from '@angular/core';
import { UniversityService } from '../university.service';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  universityList: BehaviorSubject<any>= new BehaviorSubject<any>([]);
  universityDataSubject = this.universityList.asObservable();

  constructor() {

   }

   universityDataLists(universityData:any){
     console.log(universityData);
     console.log("4");
     this.universityList.next(universityData);
     
     

   }

}
