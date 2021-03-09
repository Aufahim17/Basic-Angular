import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkingOutput(a, b){
    return a+b;
  }
  visible: string = "true";
}
