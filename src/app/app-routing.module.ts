import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: '../pages/tabs/tabs.module#TabsPageModule'
  }, {
    path: 'login',
    loadChildren: '../pages/login/login.module#LoginPageModule'
  }, {
    path: 'register',
    loadChildren: '../pages/register/register.module#RegisterPageModule'
  }, {
    path: 'forgetpassword',
    loadChildren: '../pages/forgetpassword/forgetpassword.module#ForgetPasswordPageModule'
  }, {
    path: '**',
    redirectTo: 'tabs',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
