import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import { ActivatedRoute,Router} from '@angular/router';
import {HeroService} from './hero.service';

@Component({
	moduleId:module.id,
	selector:'my-hero-detail',
	templateUrl:'hero-detial.component.html'
})

export class HeroDetailComponent{

	
	hero:any;

	title = "From Herodetailcomponent."

	constructor(private heroService:HeroService,private route:ActivatedRoute, private router:Router){}

	ngOnInit(){
		this.route.params.subscribe(params => {
			let id = Number.parseInt(params['id']);
			this.hero = this.heroService.getHero(id).then(heroes => this.hero = heroes);
		});
	}

	goBack(){
		let link = ['/dashboard'];
		this.router.navigate(link);
	}
}