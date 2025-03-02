import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  private cartItems=new BehaviorSubject(0);
  itemsNumber$=this.cartItems.asObservable();
  increase(amount:number):void{
   this.cartItems.next(this.cartItems.value+amount)
  }
  decress(amount:number){
    this.cartItems.next(this.cartItems.value-amount)
  }
  constructor() { }
}
