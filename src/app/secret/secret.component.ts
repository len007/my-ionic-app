import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { caseData } from '../../models/case';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss'],
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '-80vw'
      })),
      state('stayR', style({
        marginLeft: '-80vw'
      })),
      state('moveLeft', style({
        marginLeft: '-80vw'
      })),
      state('moveRight', style({
        marginLeft: '-80vw'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => stay', animate('500ms ease-in-out', style({
        marginLeft: '-160vw'
      }))),
      transition('* => moveRight', animate('500ms ease-in-out', style({
        marginLeft: '0vw'
      })))
    ])
  ]
})
export class SecretComponent implements OnInit {
  public caseData = caseData;
  public bannerPic = caseData[0]['imgs'];
  state = 'stayL';
  state1 = 'stay';
  state2 = 'stayR';
  timer: any;
  constructor(private title: Title) { }
  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }
  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.bannerPic.push(this.bannerPic[0]);
      this.bannerPic.shift();
    } else if (this.state === 'moveRight') {
      const last = this.bannerPic.length - 1;
      this.bannerPic.unshift(this.bannerPic[last]);
      this.bannerPic.pop();
      this.state = 'stayR';
    }
  }

  stopPlay(): void {
    clearInterval(this.timer);
  }

  playPre(): void {
    this.state = 'moveRight';
  }

  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }
  ngOnInit() {
    this.title.setTitle('隐私政策');
    // this.autoPlay();
  }

}
