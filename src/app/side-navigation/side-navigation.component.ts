import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor(private router:Router) { }
  navOpen:boolean=false

  ngOnInit(): void {
  }
  navigateToAbout() {
    this.router.navigate(['side-about']);

  }

  navigateToService() {
    this.router.navigate(['side-service']);

  }
  navigateToClients() {
    this.router.navigate(['side-clients']);

  }
  navigateToContacts(){
    this.router.navigate(['side-clients']);
  }
  open(){
    this.navOpen=true
  }
  close(){
    this.navOpen=false
  }
}
