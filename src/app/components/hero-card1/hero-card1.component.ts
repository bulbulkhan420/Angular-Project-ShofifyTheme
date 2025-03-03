import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-hero-card1',
  imports: [],
  templateUrl: './hero-card1.component.html',
  styleUrl: './hero-card1.component.scss'
})
export class HeroCard1Component {
 @Input() hero={title:'',description:'',product:'',image:''}
}
