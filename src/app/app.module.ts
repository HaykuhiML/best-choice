import {NgModule} from '@angular/core';
import {MomentModule} from 'ngx-moment';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderComponent} from './components/header/header.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {AppComponent} from './components/root/app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {ArtSchoolsModule} from './pages/art-schools/art-schools.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MomentModule,
    CoreModule,
    ArtSchoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
