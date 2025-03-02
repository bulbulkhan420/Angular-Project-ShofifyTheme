import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCardListService {
  http=inject(HttpClient)
  url:string='https://fakestoreapi.com/products'
  constructor() { }
  getAllCardData():Observable<any>{
  return this.http.get<any>(this.url)
  }
}
