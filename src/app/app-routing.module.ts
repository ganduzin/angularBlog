import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleContentComponent } from './pages/article-content/article-content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'articleContent/:id',
    component:ArticleContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
