import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatIconModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
    ],
})
export class MyOwnCustomMaterialModule { }