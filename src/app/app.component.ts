import { Component } from '@angular/core';

import { Platform, NavController,ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx'
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { NavigationEnd, Router } from '@angular/router';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{
  public backButtonPressed = false;
  public url;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService : TranslateService,
    private nav: NavController,
    private fullScreen: AndroidFullScreen,
    private toastController: ToastController,
    private minimize: AppMinimize,
    private router: Router,
    private common: CommonService,
  ) {
    this.initRouterListen();
    this.initTranslate();
    this.initializeApp();

    if(!window.localStorage.getItem('token')&& !window.localStorage.getItem('userInfo')){ // 判断是否登陆
      console.log('>>>未登录>>>>跳转至登录页>>>');
      this.nav.navigateRoot('/login');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.miniApp(); // 提示toast
      this.common.presentToast("aaaaaa","toast-success");
      this.registerBackButtonAction();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerFullScreen();
    });
  }
  initTranslate(){
    // 设置默认语言
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("zh");
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    window.localStorage.setItem('language','zh');
  }
  registerFullScreen(){
    this.fullScreen.isImmersiveModeSupported().then(() =>{ // 判断是否全屏
      console.log('Immersive mode supported');
      this.fullScreen.immersiveMode().then(()=>{ // 一直全屏，而不是做出动作后就不全屏
        console.log('FullScreen');
      })
    }).catch(err => console.log(err));
  }
  registerBackButtonAction() {
    this.platform.backButton.subscribe(() => {
      if (this.url === '/tabs' || this.url === '/login' || this.url === '/register' || this.url === '/forgetpassword' || this.url === '/tabs/home'|| this.url === '/tabs/cart' || this.url === '/tabs/me') { // 监测到当前路由，判断是否要退出程序
        if (this.backButtonPressed) {
          this.minimize.minimize(); // 程序最小化
          this.backButtonPressed = false;
        } else {
          this.miniApp(); // 提示toast
          this.backButtonPressed = true;
          setTimeout(() => this.backButtonPressed = false, 2000);
        }
      }
    });
  }

  initRouterListen() { 
      this.router.events.subscribe(event => { // 需要放到最后一个执行
        if (event instanceof NavigationEnd) {
              this.url = event.url;
              console.log(this.url);
          }
      });
  }

  async miniApp() {
      const toast = await this.toastController.create({
          message: '再按一次退出应用',
          position: "middle",
          duration: 1000,
          cssClass: "toast-success",
      });
      toast.present();
  }
}
