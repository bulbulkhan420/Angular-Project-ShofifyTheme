import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { HeroCard1Component } from '../../components/hero-card1/hero-card1.component';
import { HeroCard2Component } from '../../components/hero-card2/hero-card2.component';
@Component({
  selector: 'app-homepage',
  imports: [HerosectionyComponent,ProductListComponent,HeroCard1Component,HeroCard2Component],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
