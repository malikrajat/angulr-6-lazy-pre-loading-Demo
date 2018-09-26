import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
