import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ArtSchoolsPageComponent} from '../components/art-schools-page/art-schools-page.component';
import {ArtSchoolsItemPageComponent} from '../components/art-schools-item-page/art-schools-item-page.component';

const routes: Routes = [
  {
    path: '',
    component: ArtSchoolsPageComponent
  },
  {
    path: '',
    component: ArtSchoolsItemPageComponent
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ArtSchoolsRoutingModule { }
