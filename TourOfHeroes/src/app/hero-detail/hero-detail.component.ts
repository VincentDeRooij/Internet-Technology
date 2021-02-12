import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../services/hero.service";
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id =+ this.route.snapshot.paramMap.get('id')!; // add the exclamation mark to circumvent the strict null checks of typescript
    this.heroService.getHero(id).subscribe(heroReceived => this.hero = heroReceived);

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero!)
      .subscribe(() => this.goBack());
  }
  

}