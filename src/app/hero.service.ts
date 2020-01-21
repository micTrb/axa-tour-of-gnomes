import { Injectable } from '@angular/core';
import { HEROES } from './data/heroes-mock';
import { of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class HeroService {

  // Service-in-service scenario
  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id) {

    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
