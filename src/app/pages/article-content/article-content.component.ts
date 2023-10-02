import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent {

  route:ActivatedRoute = inject(ActivatedRoute)
  titleImage:string | undefined = ""
  title:string | undefined = ""
  text:string | undefined = ""
  category:string | undefined = ""
  lenght:string | undefined = ""
  date:string | undefined = ""

  constructor() {
    const articleId = this.route.snapshot.params['id']
    const articleData = dataFake.find((articleElement) =>  articleElement.id === articleId)
    this.title = articleData?.title
    this.titleImage = articleData?.photo
    this.text = articleData?.text
    this.date = articleData?.date
    this.lenght = articleData?.lenght
    this.category = articleData?.category
  }


}
