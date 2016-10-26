import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
