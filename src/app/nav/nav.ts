import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isOpen:boolean =false;
  isSmallScreen: boolean = window.innerWidth < 992;
  check(){
    this.isOpen=!this.isOpen
  }
  
}
