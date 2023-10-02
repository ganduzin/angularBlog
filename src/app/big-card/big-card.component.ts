import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  
  @Input()
  photoBomb:string = ""
  @Input()
  titleInputed:string = ""
  @Input()
  category:string = ""
  @Input()
  lenght:string = ""
  @Input()
  date:string = ""

}
