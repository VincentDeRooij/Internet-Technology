import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";

import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] | undefined;

  selectedHero: Hero | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService) { } // inject the depedancy into the constructor for usage

  ngOnInit(): void {
    // this is the void main method of an component

    this.getHeroes(); // calls the getHeroes method defined inside this component
  }

  onSelect(hero: Hero): void{
    
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }

  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(receivedHeroesValue => this.heroes = receivedHeroesValue);
  }

}
