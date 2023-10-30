import { AdminComponent } from '@aaa/admin/admin.component';
import { LoginComponent } from '@aaa/auth/login.component';
import { HomeComponent } from '@aaa/home/home.component';
import { authGuard } from '@aaa/service/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
