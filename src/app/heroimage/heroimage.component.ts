import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroimage',
  templateUrl: './heroimage.component.html',
  styleUrls: ['./heroimage.component.css']
})
export class HeroimageComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute ,private  el: ElementRef) {}
  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
  
      // Check the current route and apply styles accordingly
      if (currentUrl.includes('/home')) {
        console.log("home!!");
       
        let normal = this.el.nativeElement.querySelector(".normal"); 
        let isnormal=normal.classList.contains('normal');
        if(isnormal){
          
          normal.classList.remove('normal');
          normal.classList.add("hero"); 
        }
               //change to hero'
        let nonmaskmask = this.el.nativeElement.querySelector(".nonmask"); 
        let isnonmask=nonmaskmask.classList.contains('nonmask');
        if(isnormal){
         nonmaskmask.classList.remove('nonmask');
          nonmaskmask.classList.add("mask"); 
        }

        let notinto = this.el.nativeElement.querySelector(".notinto"); 
        let isnotinto=notinto.classList.contains('notinto');
        if(isnormal){
          notinto.classList.remove('notinto');
          notinto.classList.add("into-img"); 
        }

        let content = this.el.nativeElement.querySelector(".hide"); 
        let iscontent=content.classList.contains('hide');
        if(isnormal){
         content.classList.remove('hide');
          content.classList.add("content"); 
        }
      } 
    });
  }


}
