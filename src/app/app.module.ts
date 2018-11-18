import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYb1_KsSZZqR7-VjcXq9XPrMJM4HZ1lVI'
    }),
    FormsModule,
    JwtModule
  ],
  providers: [
    AuthService,
    UsersService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
