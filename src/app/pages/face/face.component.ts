import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-face',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './face.component.html',
  styleUrl: './face.component.scss'
})
export class FaceComponent {

}
