import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

 

  constructor(private router:Router) { 
    this.router.navigate(["university"]);
  }

  ngOnInit(): void {
  }

}
