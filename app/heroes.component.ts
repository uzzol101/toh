import {Component,OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
	  title = 'Tour of Heroes';
	  heroes:Hero[] = [];
	  constructor(private heroService:HeroService){}

	  ngOnInit(){
	  	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	  }
}