import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { caseData } from '../../models/case';
import { trigger, state, animate, transition, style } from '@angular/animations';
import Swiper from 'swiper';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  public caseData = caseData;
  constructor(private title: Title) { }
  ngOnInit() {
    this.title.setTitle('案例');
    let testSwiper = new Swiper('#autoPlay0 .swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: '.swiper-pagination',
        //clickable :true,
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
            let translate = slideProgress * modify * 60 + 'px';
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
  }
}
