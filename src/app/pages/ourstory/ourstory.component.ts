import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-ourstory',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './ourstory.component.html',
  styleUrl: './ourstory.component.scss'
})
export class OurstoryComponent {

}
