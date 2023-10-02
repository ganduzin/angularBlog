import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

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
