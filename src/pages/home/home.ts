import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {NewsProvider} from "../../providers/news/news";
import {DetailPostPage} from "../detail-post/detail-post";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('pageSlider') pageSlider: Slides;


  tabs:any = [
    'agora',
    'politica',
    'economia',
    'esportes'
  ];

  posts=[];
  now = 1;
  politica = 1;
  economia = 1;
  esportes = 1;
  segmentSelect:any = 'agora';
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {
    this.getPosts(this.now++,()=>{});
  }

  getPosts(page,onLoaded){
    this.newsProvider.getPosts(page)
      .then((res: any[]) => {
        for(let post of res['posts']){
          this.posts.push(post)
          console.log(this.posts);
        }
        onLoaded();
      });
  }

  getPostsCategory(page,category,onLoaded){
    this.newsProvider.getPostsCategory(page++,category)
      .then((res: any[]) => {
        for(let post of res['posts']){
          this.posts.push(post)
          console.log(this.posts);
        }
        onLoaded();
      });
  }

  segmentCase(onLoaded){
    switch(this.segmentSelect) {
      case 'agora': {
        this.getPosts(this.now++,()=>{
          onLoaded();
        });

        break;
      }
      case 'politica': {
        this.getPostsCategory(this.politica++,12,()=>{
          onLoaded();
        });
        break;
      }
      case 'economia': {
        this.getPostsCategory(this.economia++,10,()=>{
          onLoaded();
        });
        break;
      }
      case 'esportes': {
        this.getPostsCategory(this.esportes++,11,()=>{
          onLoaded();
        });
        break;
      }
      default: {
        //this.getPosts(this.page,11);
        break;
      }
    }
  }

  onSegmentChanged($event){
    this.segmentCase(()=>{});
    this.posts =[];
    this.now = 1;
    this.politica = 1;
    this.economia = 1;
    this.esportes = 1;
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.segmentCase(()=>{
        infiniteScroll.complete();
    });
    }, 500);
  }

  goToPage(post){
    this.navCtrl.push(DetailPostPage,{
      post: post
    })
  }

  selectTab(index) {
    console.log(index);
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    console.log($event._snapIndex);
    switch($event._snapIndex) {
      case 0: {
        this.segmentSelect = 'agora';
        break;
      }
      case 1: {
        this.segmentSelect = 'politica';

        break;
      }
      case 2: {
        this.segmentSelect = 'economia';

        break;
      }
      case 3: {
        this.segmentSelect = 'esportes';

        break;
      }
      default: {
        //this.getPosts(this.page,11);
        break;
      }
    }
  }

}
