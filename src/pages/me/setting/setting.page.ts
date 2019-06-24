import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-setting',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss']
})
export class SettingPage {

  constructor(
    public nav: NavController,
    public common: CommonService,
    public loading: LoadingController,
  ) {
  }
  toLoginOut() {
    this.common.presentAlertConfirm("要退出登陆吗？", "提示", "退出", () => {
      window.localStorage.removeItem('userInfo');
      window.localStorage.removeItem('token');
      this.nav.navigateRoot("/login");
    }, () => {
      this.common.presentToast('你点击了取消', false, 2000, "关闭", () => {
        console.log('test');
      });
    })
  }
  toResetPassword() {
    this.nav.navigateForward("/tabs/me/setting/resetpassword");
  }
  toBlancePage(){}
  toSharePage(){}
  toMessagePage(){}
  toLanguagePage(){}
}
