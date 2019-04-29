import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseComponent } from './case.component';
import { RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    NzCarouselModule,
    RouterModule.forChild([
      {
        path: '',
        component: CaseComponent
      }
    ])
  ],
  exports: [CaseComponent]
})
export class CaseModule { }
