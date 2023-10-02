import { Component, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  photoBomb:string | undefined = ""
  
  titleInputed:string | undefined = ""
  
  category:string | undefined = ""
  
  lenght:string | undefined = ""
  
  date:string | undefined = ""
  @Input()
  id:string | undefined = ""

  ngOnInit() {
    const articleData = dataFake.find((articleElement) =>  articleElement.id === this.id)
    this.titleInputed = articleData?.title
    this.photoBomb = articleData?.photo
    this. category = articleData?.category
    this. lenght = articleData?.lenght
    this.date = articleData?.date
  }
}
