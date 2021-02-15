import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  id: Number;
  departNews: News[] = [];
  constructor(private newsService: NewsService,private route: ActivatedRoute) { }

  ngOnInit() {
    
        
    this.route.paramMap.subscribe(parobj=>{this.id = +parobj.get('id');
    this.newsService.getNewsbyDepartID(this.id).subscribe(
      response => { 
        this.departNews = response as News[] ;
      }, error => { alert("error in get department news") });  
  });
  }
}
