import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, NavDelegate, Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device';
import { TabsPage } from '../tabs/tabs.page';

declare let Wechat: any;

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild(NavDelegate) nav: NavDelegate;

  public lan = "cn";
  public loginInfo = {
    phone: "",
    password: "",
    uuid: "",
  }
  public canLogin = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform) { }


}
