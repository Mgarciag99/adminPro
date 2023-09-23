import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { authRoutingModule } from './auth/auth.routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { 
    path: '**',
    component: NopagefoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    pagesRoutingModule,
    authRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
