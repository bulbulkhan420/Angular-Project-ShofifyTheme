import { Component } from '@angular/core';
import { HerosectionyComponent } from '../../components/herosectiony/herosectiony.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
@Component({
  selector: 'app-contract',
  imports: [HerosectionyComponent,ProductListComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
