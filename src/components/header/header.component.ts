import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('menuClick', [
      state('initial', style({
        right: '-6rem',
      })),
      state('final', style({
        right: '2vw',
      })),
      transition('initial=>final', animate('500ms ease-in')),
      transition('final=>initial', animate('500ms ease-out'))
    ]),
  ],
})
export class HeaderComponent implements OnInit,OnChanges {
  public isShowOtherMenu = false;
  public currentState = 'initial';
  public activeTab = 'home';
  public hoverTab = 'home';
  constructor(private location: Location, private router: Router) { }
  ngOnInit() {
    if (this.location.path().indexOf('case') !== -1) {
      this.activeTab = 'case';
      this.hoverTab = 'case';
    } else if (this.location.path().indexOf('details') !== -1) {
      this.activeTab = 'details';
      this.hoverTab = 'details';
    } else if (this.location.path().indexOf('server') !== -1) {
      this.activeTab = 'server';
      this.hoverTab = 'server';
    } else if (this.location.path().indexOf('about') !== -1) {
      this.activeTab = 'server';
      this.hoverTab = 'server';
    } else if (this.location.path().indexOf('secret') !== -1) {
      this.activeTab = 'server';
      this.hoverTab = 'server';
    } else if (this.location.path().indexOf('details') !== -1) {
      this.activeTab = 'server';
      this.hoverTab = 'server';
    } else {
      this.activeTab = 'home';
    }
  }
  ngOnChanges(){}
  mouseEnterFun(event) {
    this.hoverTab = event;
  }
  mouseLeaveFun() {
    this.hoverTab = '';
  }
  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  toHomePage() {
    this.activeTab = 'home';
    this.router.navigate(['/home']);
  }
  toCasePage() {
    this.activeTab = 'case';
    this.router.navigate(['/case']);
  }
  toDetailsPage() {
    this.activeTab = 'details';
    this.router.navigate(['/details']);
  }
  toServerPage() {
    this.activeTab = 'server';
    this.router.navigate(['/server']);
  }
  toAboutPage() {
    this.activeTab = 'about';
    this.router.navigate(['/about']);
  }
  toSecretPage() {
    this.activeTab = 'secret';
    this.router.navigate(['/secret']);
  }
}
