import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../news.model';

@Component({
  selector: 'new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {

  id: Number;
  currentNew: News=new News;
  constructor(private newsService: NewsService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parobj=>{this.id = +parobj.get('id');
    this.newsService.getNewbyID(this.id).subscribe(
      response => { this.currentNew = response as News }, error => { alert("error in get current new") });
    });
  }
  returnToDept(id:Number){
    this.router.navigate(['/news/'+id]);
  }

}
