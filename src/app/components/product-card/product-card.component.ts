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
 @Input() isRemove:boolean=false;
 constructor(private cardList:AddtocartService){}
 increase(){
  this.cardList.increase(1)
 }
 decress(){
  this.cardList.decress(1)
 }
 sucess(){
  alert('Product added to cart')
 }
 addList(){
  this.cardList.addCartList(this.card)
 }
 removeList(){
  
  this.cardList.removeCartList(this.card)
 }
}
