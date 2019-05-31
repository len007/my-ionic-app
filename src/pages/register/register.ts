import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastController, NavController, Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { TabsPage } from '../tabs/tabs.page';
import { TranslateService } from '@ngx-translate/core';

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
    private toast: ToastController,
    private platform: Platform,
    private device: Device,
    private translateService: TranslateService) {

  }
  ngOnInit(): void {
    console.log(this.device);
    this.loginInfo.uuid = this.device.uuid;
    this.presentToast(this.loginInfo.uuid);
  }
  async presentToast(message){
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
  inputLogin() {
    if (/^\d{9,12}$/.test(this.loginInfo.username) && /^.{6,20}$/.test(this.loginInfo.password)) {
      if (this.loginInfo.password === this.loginInfo.passwordCheck) {
        this.canRegister = 2;
      }else{
        this.canRegister = 1;
      }
    }else{
      this.canRegister = 0;
    }
  }
  register() {
    if (this.canRegister == 2) {
      window.localStorage.setItem('token',this.loginInfo.username);
      // 此处调用-注册接口
      this.nav.navigateRoot('/tabs/home');
    }else if(this.canRegister == 1){
      let message = "两次输入的密码不一致！";
      this.translateService.get('error-password-password').subscribe(value => {
        if (value) {
          message = value;
        }
      })
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
  toLogin(){
    this.nav.navigateForward('/login');
  }
}
