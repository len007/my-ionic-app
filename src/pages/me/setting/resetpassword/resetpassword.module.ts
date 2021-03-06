import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResetPasswordPage } from './resetpassword';

import { TranslateModule }from "@ngx-translate/core";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: ResetPasswordPage }])
  ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
