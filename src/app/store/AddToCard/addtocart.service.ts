import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  private cartItems=new BehaviorSubject(0);
  itemsNumber$=this.cartItems.asObservable();
  private showcard=new BehaviorSubject(false);
  showCard$=this.showcard.asObservable();
  private cartList=new BehaviorSubject([]);
  cartList$=this.cartList.asObservable();
  increase(amount:number):void{
   this.cartItems.next(this.cartItems.value+amount)
  }
  decress(amount:number){
    this.cartItems.next(this.cartItems.value-amount)
  }
  showCard(){
    this.showcard.next(!this.showcard.value)
  }
  addCartList(data:any){
    this.cartList.next(this.cartList.value.concat(data))
    console.log(this.cartList.value)
  }
  removeCartList(data:any){
  
    this.cartList.next(this.cartList.value.filter((item:any)=>item.id!==data.id))
    console.log('tt',this.cartList.value)
  }
  constructor() { }
}
