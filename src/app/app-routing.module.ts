import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './layout/components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationModule)},
  { path: 'user', loadChildren: () => import('./user/user.module').then( m => m.UserModule)},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
