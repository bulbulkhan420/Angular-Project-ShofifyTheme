import { Component } from '@angular/core';
import { HeroCard1Component } from '../hero-card1/hero-card1.component';
import { HeroCard2Component } from '../hero-card2/hero-card2.component';
@Component({
  selector: 'app-details-card-list',
  imports: [HeroCard1Component, HeroCard2Component],
  templateUrl: './details-card-list.component.html',
  styleUrl: './details-card-list.component.scss'
})
export class DetailsCardListComponent {

}
