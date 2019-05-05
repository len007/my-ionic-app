import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { NzIconModule, NzCollapseModule, NzTableModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzCollapseModule,
    NzIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent
      }
    ])
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
