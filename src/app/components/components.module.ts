import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    
  ],
})
export class ComponentsModule { }
