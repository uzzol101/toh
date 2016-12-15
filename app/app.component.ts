import { Component } from '@angular/core';
import {Hero} from './hero';



@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
  
})
export class AppComponent {

 
  selectedHero: Hero;


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}