import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-herosectiony',
  imports: [],
  templateUrl: './herosectiony.component.html',
  styleUrl: './herosectiony.component.scss'
})
export class HerosectionyComponent {
 @Input() hero={title:'',description:'',product:''}
}
