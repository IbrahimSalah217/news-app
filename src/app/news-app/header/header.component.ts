import { Component, OnInit } from '@angular/core';
import { Department } from '../department.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  departments:Department[]=[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getAllDepatments().subscribe(
      response => { this.departments = response as Department[] }, error => { alert("error in get departments") });  
  }

}
