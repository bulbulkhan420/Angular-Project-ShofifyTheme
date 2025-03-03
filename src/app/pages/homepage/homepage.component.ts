import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { DetailsCardListComponent } from '../../components/details-card-list/details-card-list.component';
import { SponserListComponent } from '../../components/sponser-list/sponser-list.component';
import {ProductListBottomComponent} from '../../components/product-list-bottom/product-list-bottom.component';
@Component({
  selector: 'app-homepage',
  imports: [HerosectionyComponent,ProductListComponent,DetailsCardListComponent,SponserListComponent,ProductListBottomComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
