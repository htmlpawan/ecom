import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive: boolean=false;
  isSubMenu:boolean = false;
  constructor(private router : Router) { 
}
  
  
  ngOnInit(): void {
  }
 
  togglemenu(){
    this.isActive = !this.isActive;
  }

  toggleSubMenu(){
    this.isSubMenu = !this.isSubMenu;
  }
}
