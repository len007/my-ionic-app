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
    this.imgList = ['assets/imgs/1.png', 'assets/imgs/2.png', 'assets/imgs/3.png', 'assets/imgs/4.png', 'assets/imgs/5.png', 'assets/imgs/6.png',]
    let testSwiper = new Swiper('.home-box .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },
      on: {
        progress: void function (progress) {
          console.log(progress);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: void function (transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
            console.log(transition);
          }

        }
      }
    });
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
