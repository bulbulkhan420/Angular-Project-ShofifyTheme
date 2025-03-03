import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-body',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
