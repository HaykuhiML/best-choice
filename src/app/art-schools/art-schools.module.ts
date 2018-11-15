import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtSchoolsRoutingModule} from './art-schools-routing/art-schools-routing.module';
import { ArtSchoolsPageComponent } from './components/art-schools-page/art-schools-page.component';
import { ArtSchoolsItemPageComponent } from './components/art-schools-item-page/art-schools-item-page.component';

@NgModule({
  imports: [
    CommonModule,
    ArtSchoolsRoutingModule
  ],
  declarations: [ArtSchoolsPageComponent, ArtSchoolsItemPageComponent]
})
export class ArtSchoolsModule { }
