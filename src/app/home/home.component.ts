import { Component, OnInit } from '@angular/core';

import { BroadcastService } from '../../services/broadcast/broadcast.service';
import { from, fromEvent } from 'rxjs';
import { homeData } from '../../models/home';
import { Title } from '@angular/platform-browser';
import { debounceTime } from 'rxjs/operators';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideIndex;
  imgList;
  subscribeScoll;
  homeData = homeData;
  constructor(private broadcast: BroadcastService, private title: Title) { }

  ngOnInit() {
    this.subscribeScoll = fromEvent(window, 'scroll').pipe(debounceTime(500)).subscribe((event) => {
      console.log(1);
    });
    this.title.setTitle('首页');
    this.imgList = ['assets/imgs/server/1.png', 'assets/imgs/server/2.png', 'assets/imgs/server/3.png', 'assets/imgs/server/4.png']
    // Create an Observable out of a promise
    const data = from(fetch('/api/endpoint'));
    // Subscribe to begin listening for async result
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }
  onIndexChange(event) {
    console.log(event);
  }
}
