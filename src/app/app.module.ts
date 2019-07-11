import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SocialLoginComponent } from './login/social-login/social-login.component';
import { LoginSliderComponent } from './login/login-slider/login-slider.component';
import { LoginHeaderComponent } from './login-header/login-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    LoginFormComponent,
    SocialLoginComponent,
    LoginSliderComponent,
    LoginHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
