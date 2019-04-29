import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: './home/home.module#HomeModule'
}, {
  path: 'details',
  loadChildren: './details/details.module#DetailsModule'
}, {
  path: 'case',
  loadChildren: './case/case.module#CaseModule'
}, {
  path: 'server',
  loadChildren: './server/server.module#ServerModule'
}, {
  path: 'about',
  loadChildren: './about/about.module#AboutModule'
}, {
  path: 'secret',
  loadChildren: './secret/secret.module#SecretModule'
},
{
  path: '**',
  redirectTo: 'home',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
