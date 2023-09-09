import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-req-book',
  templateUrl: './req-book.component.html',
  styleUrls: ['./req-book.component.css']
})
export class ReqBookComponent {

  constructor() {}
     reqBook = new FormGroup({
      username: new FormControl( '' ),
      bookname: new FormControl( '' ),
      author: new FormControl( '' ),
      bookedition: new FormControl( '' )
  });
  

  message: boolean = false;
  saveBook(value: any): void {
    console.log(value);
    this.message = true;
    this.reqBook.reset( {} );

  }
  removeMessage() {
    this.message = false;
  }
}
