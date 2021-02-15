import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news-app/news/news.component';
import { NewDetailsComponent } from './news-app/new-details/new-details.component';

const routes: Routes = [
  {path:'news/:id',component:NewsComponent},
  {path:'newDetails/:id',component:NewDetailsComponent},
  {path:'',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
