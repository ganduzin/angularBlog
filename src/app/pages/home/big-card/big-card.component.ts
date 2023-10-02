import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  
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
