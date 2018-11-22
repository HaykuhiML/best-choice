import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ArtSchoolComponent} from './art-school/art-school.component';
import {ArtSchoolItemComponent} from './art-school-item/art-school-item.component';


const routes: Routes = [
  {
    path: '',
    component: ArtSchoolComponent
  },
  {
    path: ':id',
    component: ArtSchoolItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class ArtSchoolsRoutingModule { }


