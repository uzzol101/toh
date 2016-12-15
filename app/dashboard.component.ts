import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@ Component({
	moduleId:module.id,
	selector: 'my-dashboard',
	template:`<h1>My Dashboard.</h1> <ul><li *ngFor="let heroes of hero"><a href="#" [routerLink]="['/detail',heroes.id]">{{heroes.name}}</a></li></ul>`
})
export class DashboardComponent {
	hero:Hero[]=[];
	constructor(private heroService: HeroService){}
	ngOnInit(){
		this.heroService.getHeroes().then(heroes => this.hero = heroes.slice(1,6));
	}
}