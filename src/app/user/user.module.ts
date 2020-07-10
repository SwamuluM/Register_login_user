import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { UserService } from './user.service';

const routes: Routes = [
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class UserModule { }
