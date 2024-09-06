import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './components/login/login.component';
import { ActivateGuard, LoginGuard } from './activate.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'regForm', component: FormComponent },
  { path: 'login', component: LoginComponent, canActivate:[LoginGuard] },
  {path: 'home', component: HomeComponent, canActivate:[ActivateGuard]},
  { path: 'components', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
