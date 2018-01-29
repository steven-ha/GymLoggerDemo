// ng specific
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

// services
import { UserAuthService } from './services/auth/user-auth.service';
import { AuthGuard } from './guards/auth.guard';

// angularx social login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


// bootstrap
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

// angular calendar
import { CalendarModule } from 'angular-calendar';

// add this file to .gitignore

//config stuff
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("[ENTER_GOOGLE_OAUTH_CLIENTID]")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("[ENTER_FACEBOOK_APP_ID]")
  }
]);

// define ng routes
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  {path:'calendar', component: CalendarComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule.initialize(config),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [AuthGuard, UserAuthService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
