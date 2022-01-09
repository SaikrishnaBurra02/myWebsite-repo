import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  navigateToEmployee() {
    this.router.navigate(['employee']);

  }

  navigateToCompany() {
    this.router.navigate(['company']);

  }
  navigateToVisa() {
    this.router.navigate(['visa']);

  }
}
