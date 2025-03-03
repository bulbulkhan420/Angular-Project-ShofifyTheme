import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';

import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-blog',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
