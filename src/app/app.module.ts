import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../components/header/header.component';
import { BroadsideComponent } from '../components/broadside/broadside.component';
import { BroadcastService } from '../services/broadcast/broadcast.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ScrollDirective } from '../directives/scroll.directive';
import { FooterComponent } from '../components/footer/footer.component';

// import { MyOwnCustomMaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    BroadsideComponent,
    HeaderComponent,
    ScrollDirective,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [BroadcastService, { provide: NZ_I18N, useValue: zh_CN }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
