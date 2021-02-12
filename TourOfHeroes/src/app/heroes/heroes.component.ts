import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";

import { HeroService } from "../services/hero.service";
import { MessageService } from "../services/message.service";

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

  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(receivedHeroesValue => this.heroes = receivedHeroesValue);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes!.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes!.push(hero);
      });
  }

}
