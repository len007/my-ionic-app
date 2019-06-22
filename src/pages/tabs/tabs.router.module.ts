import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [{
  path: '',
  component: TabsPage,
  children: [
    {
      path: 'home',
      loadChildren: '../home/home.module#HomePageModule'
    },
    {
      path: 'cart',
      loadChildren: '../cart/cart.module#CartPageModule'
    }, {
      path: 'me',
      loadChildren: '../me/me.module#MePageModule'
    },
    {
      path: '**',
      redirectTo: 'me',
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
