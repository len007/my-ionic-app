import { Component, OnInit } from '@angular/core';

import { BaseService } from '../../services/base.service';
import { NavController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpsService } from '../../services/https.service';

import { USER_INFO_API } from '../../values/api';
import { CommonService } from '../../services/common.service';
import {  AndroidFullScreen } from '@ionic-native/android-full-screen/ngx'

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
  private isFullScreen = false;
  constructor(
    public base: BaseService,
    public common: CommonService,
    public loading: LoadingController,
    public translateService: TranslateService,
    public nav: NavController,
    public http: HttpsService,
    private  fullScreen: AndroidFullScreen,
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

  login() {  // 提交-登录
    if (this.canLogin) {
      let params = {
        "username": this.loginInfo.username,
        "password": this.loginInfo.password
      }
      window.localStorage.setItem('userInfo', JSON.stringify(params));
      window.localStorage.setItem('token', 'api_token');
      this.common.presentLoading('跳转中...',1000).then(()=>{
        this.nav.navigateRoot('/tabs');
      });
      // this.http.post(USER_INFO_API.login, params).subscribe(res => {
      //   if (res['status'] == "success") {
      //     window.localStorage.setItem('userInfo', JSON.stringify(res.user));
      //     window.localStorage.setItem('token', res.user['api_token']);
      //     this.loading.dismiss();  // 结束加载
      //     this.common.presentLoading('跳转中...',1000).then(()=>{
      //       this.nav.navigateRoot('/tabs');
      //     });
      //   }else{
      //     this.loading.dismiss();  // 结束加载
      //     this.common.presentToast(res['errorMsg'],"toast-error");
      //   }
      // }, errorHandler => {
      //   this.loading.dismiss();  // 结束加载
      //   this.common.presentToast('系统繁忙!请稍后再试',"toast-error");
      // });
    }
    else {
      let message = "请输入正确的用户名和密码";
      this.translateService.get('error-usernameorpassword').subscribe(value => {
        if (value) {
          message = value;
        }
      });
      this.common.presentToast(message,"toast-error");
    }
  }
  toRegister(){
    this.nav.navigateForward('/register');
  }
  toForgetPassword(){
    this.nav.navigateForward('forgetpassword');
  }
  fullScreenClick(){
    if(this.isFullScreen){
      this.fullScreen.showSystemUI().then(()=>{
        this.isFullScreen = false;
        console.log('取消全屏');
      }).catch(err => {
        console.log(err)
      });
    }else{
      this.fullScreen.immersiveMode().then(()=>{
        this.isFullScreen = true;
        console.log('全屏');
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
