import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'newsBar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() barNews:News[]=[];
  constructor() { }

  ngOnInit() {
  }

}
