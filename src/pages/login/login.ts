import { Component, ViewChild, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device';
import { TabsPage } from '../tabs/tabs.page';

import { BaseService } from '../../services/base.service';
import { Language } from '../../core/language';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let Wechat: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  public lan = "cn";
  public loginInfo = {
    phone: "",
    password: "",
    uuid: "",
  }
  public canLogin = false;

  constructor(public base: BaseService) {
    this.lan = Language.getLanguage().getLan();
    console.log(this.lan);
  }
  ngOnInit() {
  }

}
