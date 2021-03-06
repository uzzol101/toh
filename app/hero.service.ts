import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-hero';
// @Injectable()
export class HeroService{
	 getHeroes(): Promise<Hero[]>{
	 	return Promise.resolve(HEROES);
	}

	getHero(id:number){
		return this.getHeroes().then(heroes => heroes.find(h => h.id === id));
	}
}