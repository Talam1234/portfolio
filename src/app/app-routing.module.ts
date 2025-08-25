import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Page/Home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Page/Contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./Page/About/about.module').then( m => m.AboutModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
