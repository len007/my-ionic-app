import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretComponent } from './secret.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SecretComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SecretComponent
      }
    ]),
  ],
  exports: [SecretComponent]
})
export class SecretModule { }
