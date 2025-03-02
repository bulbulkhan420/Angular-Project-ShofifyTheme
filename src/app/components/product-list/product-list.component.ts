import { Component, inject, OnInit, signal } from '@angular/core';
import { GetCardListService } from '../../services/get-card-list.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  cardListAll=inject(GetCardListService)
   cardList=signal([])
   ngOnInit(): void {
    this.cardListAll.getAllCardData()
    .subscribe({
      next:((data)=>{
        this.cardList.set(data);
        console.log(data)
      })
    })
   }
}
