import { style } from '@angular/animations';
import { Component, HostListener, Renderer2,OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private  el: ElementRef){

  }

  ngOnInit() {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let myTag = this.el.nativeElement.querySelector("nav"); 
    let isthere=myTag.classList.contains('nav-bg');
    
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      myTag.classList.add("go");

    } else if (number < 100) {
        myTag.classList.remove("go");

    }

  }

}
