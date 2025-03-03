import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cardInterface } from '../models/cardData.interface';
@Injectable({
  providedIn: 'root'
})
export class GetCardListService {
  http=inject(HttpClient)
  url:string='https://fakestoreapi.com/products'
  constructor() { }
  getAllCardData():Observable<cardInterface[]>{
  return this.http.get<cardInterface[]>(this.url)
  }
}
