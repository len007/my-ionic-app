import { Component, ViewChild, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { TranslateService } from '@ngx-translate/core';
import { HttpsService } from '../../services/https.service';
import { USER_INFO_API } from '../../values/api';

import { CommonService } from '../../services/common.service';

declare let Wechat: any;

@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
  styleUrls: ['forgetpassword.scss']
})
export class ForgetPasswordPage implements OnInit {

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
    private nav: NavController,
    private platform: Platform,
    private device: Device,
    private http: HttpsService,
    private translateService: TranslateService,
    public common: CommonService,
    public loading: LoadingController,
  ) {

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
  forgetpassword() { // 提交-重置密码
    if (this.canRegister == 2) {
      this.common.presentLoading();
      let params = {
        "username": this.userInfo.username,
        "resetpassword": this.userInfo.password,
      }
      this.http.post(USER_INFO_API.forgetpassword, params).subscribe(res => {
        if (res['status'] == "success") {
          window.localStorage.setItem('userInfo', JSON.stringify(res.user));
          window.localStorage.setItem('token', res.user['api_token']);
          this.loading.dismiss();
          this.common.presentLoading('密码重置成功', 500).then(() => {
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
