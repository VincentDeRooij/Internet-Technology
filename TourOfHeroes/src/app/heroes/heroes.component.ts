import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from '../heroes';

import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] | undefined;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { } // inject the depedancy into the constructor for usage

  ngOnInit(): void {
    // this is the void main method of an component

    this.getHeroes(); // calls the getHeroes method defined inside this component
  }

  getHeroes():void {
    this.heroes = this.heroService.getHeroes();
  }

}
