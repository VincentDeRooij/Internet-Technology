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
}
