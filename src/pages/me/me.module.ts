import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MePage } from './me.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: MePage,
      },
      {
        path: 'blance',
        loadChildren: './blance/blance.module#BlancePageModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutPageModule'
      },
      {
        path: 'share',
        loadChildren: './share/share.module#SharePageModule'
      },
      {
        path: 'message',
        loadChildren: './message/message.module#MessagePageModule'
      },
      {
        path: 'language',
        loadChildren: './language/language.module#LanguagePageModule'
      },
      {
        path: 'setting',
        loadChildren: './setting/setting.module#SettingPageModule'
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersPageModule'
      }

    ])
  ],
  declarations: [MePage]
})
export class MePageModule { }
