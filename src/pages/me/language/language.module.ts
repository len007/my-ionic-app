import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguagePage } from './language.page';

import { TranslateModule }from "@ngx-translate/core";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([{
      path: '',
      component: LanguagePage
    }])
  ],
  declarations: [LanguagePage]
})
export class LanguagePageModule { }
