import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AddtocartService } from '../../store/AddToCard/addtocart.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  cartNumber:number=0;
   constructor(private cartlist:AddtocartService){}
   ngOnInit(): void {
     this.cartlist.itemsNumber$.subscribe({
      next:(data)=>{
        this.cartNumber=data
      }
     })
   }
   headerToggle=signal(false)
   setToggle(){
    this.headerToggle.update((data)=>!data)
   }
   menubarToggle=signal(false)
   setMenuBarToggle(){
    this.menubarToggle.update((data)=>!data)
   }
}
