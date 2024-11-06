import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { MainComponent } from './components/main/main.component';
import { ImgComponent } from './components/img/img.component';
import { TourComponent } from './components/tour/tour.component';
import { Tour2Component } from './components/tour2/tour2.component';
import { AdminComponent } from './components/admin/admin.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'Main', pathMatch: 'full' },
      { path: 'Main', component: MainComponent },
      { path: 'Introduce', component: IntroduceComponent },
      { path: 'Img', component: ImgComponent },
      { path: 'Tour', component: TourComponent },
      { path: 'Tour2', component: Tour2Component },
      { path: 'Admin', component: AdminComponent },
      { path: 'Info', component: InfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
