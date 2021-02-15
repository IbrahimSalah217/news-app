import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getAllDepatments(){
    let url = environment.url + "Departments";
    return this.httpClient.get(url);
  }
  getNewsbyDepartID(id:Number){
    let url = environment.url + `Department/${id}`;
    return this.httpClient.get(url);
  }

  getNewbyID(id:Number){
    let url = environment.url + `item/${id}`;
    return this.httpClient.get(url);
  }

  getTopNews(){
    let url = environment.url + "TopNews";
    return this.httpClient.get(url);
  }

  getFeaturedNews(){
    let url = environment.url + "FeaturedNews";
    return this.httpClient.get(url);
  }

}
