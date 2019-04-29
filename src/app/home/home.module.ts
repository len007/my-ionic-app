import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NzCarouselModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NzCarouselModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule { }
