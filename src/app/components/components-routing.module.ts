import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from '../form/form.component';
import { ActivateGuard } from '../activate.guard';

const routes: Routes = [
    {path: 'about', component : AboutComponent, canActivate:[ActivateGuard]},
    {path: 'contact', component : ContactComponent, canActivate:[ActivateGuard]},
    {path: 'home', component : HomeComponent, canActivate:[ActivateGuard]},
    {path: 'login', component : LoginComponent},
    {
      path: 'regForm',
      component: FormComponent,
            
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
