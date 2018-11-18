import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    component: DetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: DeleteComponent, canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
