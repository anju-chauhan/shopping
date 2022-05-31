import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
  title = 'shopping';
  name:any;
  submit(){
    console.log('hhhhhhhhhhh');
    console.log('name', 'anju');

  }
}
