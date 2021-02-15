import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {
  topNews: News[] = [];
  constructor(private newsServices: NewsService) { }

  ngOnInit() {
    this.newsServices.getTopNews().subscribe(
      response => { this.topNews = response as News[] }, error => { alert("error in get top news") });
      
  }

}
