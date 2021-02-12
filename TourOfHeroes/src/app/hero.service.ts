// injectable
import { Injectable } from '@angular/core';

// import the http connection libs
import { Observable } from "rxjs";

// import heroes
import { Hero } from "./hero";
import { HEROES } from "./heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // delaraction of variables

  // constructor
  constructor() { }

  // methods
  getHeroes() : Observable<Hero[]> {
    return HEROES;
  }
}
