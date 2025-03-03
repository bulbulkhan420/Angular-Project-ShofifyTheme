import { Component, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { AddtocartService } from '../../store/AddToCard/addtocart.service';
import { cardInterface } from '../../models/cardData.interface';

@Component({
  selector: 'app-card-list',
  imports: [ProductCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  
  
  
  allCartList:cardInterface[]=[];
   constructor(private cartlist:AddtocartService){}
   ngOnInit(): void {
    
     this.cartlist.cartList$.subscribe({
      next:(data)=>{
        this.allCartList=data
        console.log(data)
      }
     })
   }
   
   

}
