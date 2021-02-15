import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  featuredNews: News[] = [];
  constructor(private newsServices: NewsService) { }

  ngOnInit() {
    this.newsServices.getFeaturedNews().subscribe(
      response => { this.featuredNews = response as News[] }, 
      error => { alert("error in get featured news") });
      
  }

}
