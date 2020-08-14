import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { TranslateService } from '@ngx-translate/core';

import { HttpsService } from '../../../../services/https.service';
import { USER_INFO_API } from '../../../../values/api';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
  styleUrls: ['resetpassword.scss']
})
export class ResetPasswordPage implements OnInit {

  public lan = "zh";
  public api_token;
  public userInfo = {
    username: "",
    password: "",
    passwordCheck: "",
    uuid: "",
  };
  public canRegister = 0;
  constructor(
    public nav: NavController,
    public platform: Platform,
    public device: Device,
    public http: HttpsService,
    public translateService: TranslateService,
    public common: CommonService,
    public loading: LoadingController,
  ) {
    this.api_token = window.localStorage.getItem('token');
    this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    if (!this.api_token && !this.userInfo) { // 判断是否登陆
      console.log('>>>未登录>>>>跳转至登录页>>>');
      this.nav.navigateRoot('/login');
    }
  }
  ngOnInit(): void { }

  inputLogin() {
    if (/^\d{9,12}$/.test(this.userInfo.username) && /^.{6,20}$/.test(this.userInfo.password)) {
      if (this.userInfo.password === this.userInfo.passwordCheck) {
        this.canRegister = 2;
      } else {
        this.canRegister = 1;
      }
    } else {
      this.canRegister = 0;
    }
  }
  resetpassword() { // 提交-修改密码
    if (this.canRegister == 2) {
      this.common.presentLoading();
      let params = {
        "username": this.userInfo.username,
        "resetpassword": this.userInfo.password,
        "api_token": this.api_token,
      }
      this.http.post(USER_INFO_API.resetpassword, params).subscribe(res => {
        if (res['status'] == "success") {
          window.localStorage.setItem('userInfo', JSON.stringify(res.user));
          window.localStorage.setItem('token', res.user['api_token']);
          this.loading.dismiss();
          this.common.presentLoading('密码修改成功', 500).then(() => {
            this.nav.navigateRoot('/tabs/me');
          });
        } else {
          this.loading.dismiss();
          this.common.presentToast(res['errorMsg'], "toast-error");
        }
      }, errorHandler => {
        this.loading.dismiss();
        this.common.presentToast('系统繁忙!请稍后再试',"toast-error");
      });
    } else if (this.canRegister == 1) {
      let message = "两次输入的密码不一致！";
      this.translateService.get('error-password-password').subscribe(value => {
        if (value) {
          message = value;
        }
      })
      this.common.presentToast(message,"toast-error");
    }
    else {
      let message = "请输入正确的用户名和密码";
      this.translateService.get('error-usernameorpassword').subscribe(value => {
        if (value) {
          message = value;
        }
      })
      this.common.presentToast(message,"toast-error");
    }
  }
}
