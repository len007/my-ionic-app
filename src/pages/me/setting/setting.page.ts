import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss']
})
export class SettingPage {

  constructor(
    public nav: NavController
  ) {
    console.log(1111);
  }
  toLoginOut(){
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('token');
    this.nav.navigateRoot("/login");
  }
}
