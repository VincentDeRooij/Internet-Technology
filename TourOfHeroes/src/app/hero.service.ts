// injectable
import { Injectable } from '@angular/core';

// import message service injectable
import { MessageService } from "./message.service";

// import the http connection libs
import { Observable, of } from "rxjs";

// import heroes
import { Hero } from "./hero";
import { HEROES } from "./heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // delaraction of variables

  // constructor
  constructor(private messageService: MessageService) { }

  // methods
  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number) : Observable<Hero>{
    this.messageService.add('HeroService: fetched hero id: ${id}');
    return of(HEROES.find(hero => hero.id == id)!); // add the exclamation mark to circumvent the strict null checks of typescript
  }
}
