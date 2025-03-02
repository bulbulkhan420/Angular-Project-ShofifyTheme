import { Component, Input } from '@angular/core';
import { cardInterface } from '../../models/cardData.interface';
import { AddtocartService } from '../../store/AddToCard/addtocart.service';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
 @Input() card={id:0,category:'',image:'',price:0}
 constructor(private cardList:AddtocartService){}
 increase(){
  this.cardList.increase(1)
 }
 decress(){
  this.cardList.decress(1)
 }
}
