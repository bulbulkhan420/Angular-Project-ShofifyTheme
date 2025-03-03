import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-hero-card2',
  imports: [],
  templateUrl: './hero-card2.component.html',
  styleUrl: './hero-card2.component.scss'
})
export class HeroCard2Component {
  @Input() hero={title:'',description:'',product:'',image:''}
}
