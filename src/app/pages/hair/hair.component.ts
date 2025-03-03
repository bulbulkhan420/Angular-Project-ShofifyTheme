import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-hair',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.scss'
})
export class HairComponent {

}
