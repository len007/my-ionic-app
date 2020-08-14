import { Component, OnInit } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

import { TranslateService } from '@ngx-translate/core';

import { CommonService } from '../../services/common.service';
import { HttpsService } from '../../services/https.service';
import { USER_INFO_API } from '../../values/api';


declare let Wechat: any;

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styleUrls: ['register.scss']
})
export class RegisterPage implements OnInit {

  public lan = "zh";
  public loginInfo = {
    username: "",
    password: "",
    passwordCheck: "",
    uuid: "", //作单点登录用
  };
  public canRegister = 0;

  constructor(
    private nav: NavController,
    public common: CommonService,
    public loading: LoadingController,
    private platform: Platform,
    private device: Device,
    private http: HttpsService,
    private translateService: TranslateService) {

  }
  ngOnInit(): void {
    console.log(this.device);
    this.loginInfo.uuid = this.device.uuid;
  }

  inputLogin() {
    if (/^\d{9,12}$/.test(this.loginInfo.username) && /^.{6,20}$/.test(this.loginInfo.password)) {
      if (this.loginInfo.password === this.loginInfo.passwordCheck) {
        this.canRegister = 2;
      } else {
        this.canRegister = 1;
      }
    } else {
      this.canRegister = 0;
    }
  }
  register() { // 提交-注册
    if (this.canRegister == 2) {
      this.common.presentLoading();  // 加载
      let params = {
        "username": this.loginInfo.username,
        "password": this.loginInfo.password
      }
      this.loading.dismiss();
      this.common.presentLoading('跳转中...',1000).then(()=>{
        this.nav.navigateRoot('/tabs/home');
      });
      // this.http.post(USER_INFO_API.register, params).subscribe(res => {
      //   if (res['status'] == "success") {
      //     window.localStorage.setItem('userInfo', JSON.stringify(res.user));
      //     window.localStorage.setItem('token', res.user['api_token']);
      //     this.loading.dismiss();
      //     this.common.presentLoading('跳转中...',1000).then(()=>{
      //       this.nav.navigateRoot('/tabs/home');
      //     });
      //   } else {
      //     this.loading.dismiss();
      //     this.common.presentToast(res['errorMsg'], "toast-error");
      //   }
      // }, errorHandler => {
      //   this.loading.dismiss();
      //   this.common.presentToast('系统繁忙!请稍后再试', "toast-error");
      // });
    } else if (this.canRegister == 1) {
      let message = "两次输入的密码不一致！";
      this.translateService.get('error-password-password').subscribe(value => {
        if (value) {
          message = value;
        }
      })
      this.common.presentToast(message, "toast-error");
    }
    else {
      let message = "请输入正确的用户名和密码";
      this.translateService.get('error-usernameorpassword').subscribe(value => {
        if (value) {
          message = value;
        }
      })
      this.common.presentToast(message, "toast-error");
    }
  }
  toLogin() {
    this.nav.navigateForward('/login');
  }
  toForgetPassword() {
    this.nav.navigateForward('/forgetpassword');
  }
}
