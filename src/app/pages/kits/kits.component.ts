import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-kits',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './kits.component.html',
  styleUrl: './kits.component.scss'
})
export class KitsComponent {

}
