import { Component, OnInit } from '@angular/core';
import { NewsService } from './news-app/news.service';
import { News } from './news-app/news.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-world';
  featuredNews: News[] = [];
  topNews: News[] = [];
  constructor(private newsServices: NewsService) { }

  ngOnInit() {
    this.newsServices.getFeaturedNews().subscribe(
      response => { this.featuredNews = response as News[] }, 
      error => { alert("error in get featured news") });
      this.newsServices.getTopNews().subscribe(
        response => { this.topNews = response as News[] }, error => { alert("error in get top news") });
  }
}
