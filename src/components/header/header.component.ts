import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ScrollEvent } from '../../directives/scroll.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  public menuVisible = false;
  public activeTab = 'home';
  isOverEvent: boolean = false;
  constructor(private location: Location, private router: Router) { }
  ngOnInit() {
    if (this.location.path().indexOf('case') !== -1) {
      this.activeTab = 'case';
    } else if (this.location.path().indexOf('details') !== -1) {
      this.activeTab = 'details';
    } else if (this.location.path().indexOf('server') !== -1) {
      this.activeTab = 'server';
    } else if (this.location.path().indexOf('about') !== -1) {
      this.activeTab = 'server';
    } else if (this.location.path().indexOf('secret') !== -1) {
      this.activeTab = 'server';
    } else if (this.location.path().indexOf('details') !== -1) {
      this.activeTab = 'server';
    } else {
      this.activeTab = 'home';
    }
  }
  ngOnChanges() { }
  handleScroll(event: ScrollEvent) {
    this.isOverEvent = event.isOverEvent;
  }
  change(value: boolean): void {
    console.log(value);
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
