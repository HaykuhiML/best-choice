import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './pages/welcome/welcome.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';

const appRoute: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'art-schools',
    loadChildren: './pages/art-schools/art-schools.module#ArtSchoolsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
