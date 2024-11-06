import { NgModule, LOCALE_ID } from '@angular/core'; // locale -> định dạng dấu chấm tiền tệ
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ImgComponent } from './components/img/img.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';

import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common'; //-> định dạng dấu chấm tiền tệ
import localeVi from '@angular/common/locales/vi';
import { TourComponent } from './components/tour/tour.component';
import { Tour2Component } from './components/tour2/tour2.component';
import { AdminComponent } from './components/admin/admin.component';
import { InfoComponent } from './components/info/info.component'; //-> định dạng dấu chấm tiền tệ
registerLocaleData(localeVi); //-> định dạng dấu chấm tiền tệ
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ImgComponent,
    MainComponent,
    LoginComponent,
    SliderComponent,
    TourComponent,
    Tour2Component,
    AdminComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService, { provide: LOCALE_ID, useValue: 'vi' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
