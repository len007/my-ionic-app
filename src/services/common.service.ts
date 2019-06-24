import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, } from '@ionic/angular';

@Injectable()
export class CommonService {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
  ) { }

  /**
   * [确认框]
   * @param {string}    message [消息]
   * @param {string}    title   [标题]
   * @param {any[]) =>      void}        confirmHandler [确认操作]
   * @param confirmText  confirmText[确定键的文字]
   * @param {any[]) =>      void}        cancelHandler  [取消操作]
   */
  async presentAlertConfirm(message: string, title?: string, confirmText?: string, confirmHandler?: (...args: any[]) => void,
    cancelHandler?: (...args: any[]) => void) {
    let alert = await this.alertController.create({
      header: title ? title : "提示",
      message: message,
      buttons: [
        {
          text: "取消",
          role: "cancel",
          handler: () => {
            if (cancelHandler) cancelHandler();
          }
        },
        {
          text: confirmText || "确定",
          handler: () => {
            if (confirmHandler) confirmHandler();
          }
        }
      ],
      cssClass: "alert"
    });
    await alert.present();
  }

  /**
    * 封装的Toast
    * @param msg 要显示的消息
    * @param type 类型 0|1 失败或者成功
    * @param duration 持续时间 默认3000
    * @param closeButtonText 关闭按钮，可选
    * @param handler toast消失后的事件处理，可选
    */
  async presentToast(msg: string, type: boolean, duration?: number, closeButtonText?: string, handler?: (...args: any[]) => void) {
    let toast = await this.toastController.create({
      message: msg,
      duration: duration ? duration : 2000,
      position: "top",
      color: type ? 'primary' : 'danger',
      cssClass: "default-middle-toast",
      showCloseButton: closeButtonText ? true : false,
      closeButtonText: closeButtonText,
      translucent: true, // 半透明
    });

    if (handler) {
      toast.present().then(handler);
    } else {
      toast.present();
    }
  }

  /**
  * 封装的Loading
  * @param msg 需要显示的内容
  * @param backdropDismiss 通过点击蒙版关闭显示
  * @return loadingController 返回这个loading的实例，请通过这个实例来关闭Loading
  */
  async presentLoading(msg: string = '', duration: number = 0, backdropDismiss: boolean = false) {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: duration, // 注释掉后可以由调用处控制是否停止loading
      message: msg,
      translucent: true, // 半透明
      cssClass: 'custom-class custom-loading',
      backdropDismiss: backdropDismiss  // 点击蒙版关闭显示
    });
    return await loading.present();
  }
}