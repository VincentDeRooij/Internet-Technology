// injectable
import { Injectable } from '@angular/core';

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
  getHeroes() : Hero[] {
    return HEROES;
  }
}
