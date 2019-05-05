import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { detailsData } from '../../models/details';

import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('carousel', [
      state('void', style({
        width: 0,
        opacity: 0
      })),
      state('*', style({
        width: '20vw',
        opacity: 1
      })),
      transition('void => *', animate('0.5s 300ms ease-in')),
      transition('* => void', animate('0ms ease-out'))
    ])
  ]
})
export class DetailsComponent implements OnInit {
  public detailsData = detailsData;
  constructor(private title: Title) { }
  expandTab: string = 'base';
  ngOnInit() {
    console.log(this.detailsData);
    this.title.setTitle('商城模板');
  }
  toggleExpand(t) {
    if (this.expandTab !== t || this.expandTab == '') {
      this.expandTab = t;
    } else {
      this.expandTab = '';
    }
  }
}
