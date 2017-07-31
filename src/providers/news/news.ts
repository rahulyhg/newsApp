import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewsProvider {

  posts:any;
  constructor(public http: Http) {
  }

  getPostsCategory(page:number,category){
    return new Promise(resolve => {
      this.http.get('http://www.hackintoshworld.com/api/get_category_posts/?id='+category+'&page='+page)
        .map(res => res.json())
        .subscribe(data => {
          let post =  data;
          resolve(post);
        });

    });
  }

  getPosts(page){
    return new Promise(resolve => {
      this.http.get('http://www.hackintoshworld.com/api/get_posts/?page='+page)
        .map(res => res.json())
        .subscribe(data => {
          let post =  data;
          resolve(post);
        });

    });
  }

}
