import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    constructor(private heroService: HeroService) {
    }

    title = 'Tour of heroes';
    heroes: Hero[];
    selectedHero: Hero;

    onSelect = (hero: Hero) => {
        this.selectedHero = hero;
    }
    getHeroes = () => {
        this.heroes = this.heroService.getHeroes();
    }
    ngOnInit(): void {
        this.getHeroes();
    }
}

