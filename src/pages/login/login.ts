import { Component, ViewChild, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device';
import { TabsPage } from '../tabs/tabs.page';

import { BaseService } from '../../services/base.service';
import { ToastController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpsService } from '../../services/https.service';

import { USER_INFO_API } from '../../values/api';

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
  styleUrls: ['login.scss']
})
export class LoginPage implements OnInit {
  public lan = "zh";
  public loginInfo = {
    username: "",
    password: "",
    uuid: "", //作单点登录用
  };
  public loginToken;
  public canLogin = false;

  constructor(
    public base: BaseService,
    public toast: ToastController,
    public translateService: TranslateService,
    public nav: NavController,
    public http: HttpsService,
  ) { }
  ngOnInit() {  }
  inputLogin() {
    if (/^\d{9,12}$/.test(this.loginInfo.username)) {
      if (/^.{6,20}$/.test(this.loginInfo.password)) {
        this.canLogin = true;
        return;
      }
    }
    this.canLogin = false;
  }
  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
  login() {  // 提交-登录
    if (this.canLogin) {
      
      let params = {
        "username": this.loginInfo.username,
        "password": this.loginInfo.password
      }
      this.http.post(USER_INFO_API.login, params).subscribe(res => {
        if (res['status'] == "success") {
          window.localStorage.setItem('userInfo', JSON.stringify(res.user));
          window.localStorage.setItem('token', res.user['api_token']);
          this.nav.navigateRoot('/tabs');
        }else{
          alert(res['errorMsg']);
        }
      }, errorHandler => {
        alert('系统繁忙!请稍后再试');
      });
    }
    else {
      let message = "请输入正确的用户名和密码";
      this.translateService.get('error-usernameorpassword').subscribe(value => {
        if (value) {
          message = value;
        }
      })
      this.presentToast(message);
      return
    }
  }
  toRegister(){
    this.nav.navigateForward('/register');
  }
}
