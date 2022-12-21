import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cont = 0;
  menuState = false;

  animatedMenu() {
    let menuBurguer = document.querySelector(".menuHamburguer");
    let sidebar = document.querySelector(".navigation__links");  
    if(!this.menuState){
        menuBurguer?.classList.add("open");
        sidebar?.classList.add("showSidebar");
        this.menuState = true;
      }else{
        menuBurguer?.classList.remove("open");
        sidebar?.classList.remove("showSidebar");
        this.menuState = false;
      }
  }

}
