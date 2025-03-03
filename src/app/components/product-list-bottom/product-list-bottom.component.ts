import { Component, inject, OnInit, signal } from '@angular/core';
import { GetCardListService } from '../../services/get-card-list.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { cardInterface } from '../../models/cardData.interface';

@Component({
  selector: 'app-product-list-bottom',
  imports: [ProductCardComponent],
  templateUrl: './product-list-bottom.component.html',
  styleUrl: './product-list-bottom.component.scss'
})
export class ProductListBottomComponent implements OnInit {
  cardListAll=inject(GetCardListService)
  cardList=signal<cardInterface[]>([])
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
