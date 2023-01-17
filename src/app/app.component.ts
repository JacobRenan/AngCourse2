import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-forms></app-forms>
  <!--app-food-add></app-food-add>
  <app-food-list></app-food-list-->
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit(): void {
    
  }

}
