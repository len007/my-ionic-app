import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MePage {
  public userInfo = {
    avatar: "assets/svg/me/default-avt.jpg",
    name: 'Joke',
  }
  public orders = {
    unPay: 12,
    unDeliver: 5,
    unTake: 8
  }
  constructor(private nav: NavController) {
    
  }
  toBlancePage() {
    this.nav.navigateForward('/tabs/me/blance');
  }
  toSharePage() {
    this.nav.navigateForward('/tabs/me/share');
  }
  toMessagePage() {
    this.nav.navigateForward('/tabs/me/message');
  }
  toLanguagePage() {
    this.nav.navigateForward('/tabs/me/language');
  }
  toAboutPage() {
    this.nav.navigateForward('/tabs/me/about');
  }
  toSettingPage() {
    this.nav.navigateForward('/tabs/me/setting');
  }
  toOrdersPage(){
    this.nav.navigateForward('/tabs/me/orders');
  }
}
