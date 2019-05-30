import { NgModule } from '@angular/core';
import { TranslatePipe } from '../pipes/translate.pipe';

// 统一导入 Pipes/services
@NgModule({
    declarations: [
      TranslatePipe,
    ],
    imports: [
      
    ],
    exports: [
      TranslatePipe,
    ],
    providers: [
  
    ]
  })
  export class CoreModule {}