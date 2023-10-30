import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from '@aaa/admin/admin.component';
import { AppRoutingModule } from '@aaa/app-routing.module';
import { AppComponent } from '@aaa/app.component';
import { AuthInterceptor } from '@aaa/auth/auth.interceptor';
import { LoginComponent } from '@aaa/auth/login.component';
import { ErrorInterceptor } from '@aaa/error/error.interceptor';
import { HomeComponent } from '@aaa/home/home.component';
import { FakeBackendInterceptor } from '@aaa/service/fake.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, AdminComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: FakeBackendInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
