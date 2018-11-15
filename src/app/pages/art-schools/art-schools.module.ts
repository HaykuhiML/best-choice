import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtSchoolsRoutingModule} from './art-schools-routing.module';
import { ArtSchoolComponent } from './art-school/art-school.component';
import { ArtSchoolItemComponent } from './art-school-item/art-school-item.component';

@NgModule({
    imports: [
        CommonModule,
        ArtSchoolsRoutingModule
    ],
    declarations: [ArtSchoolComponent, ArtSchoolItemComponent]
})
export class ArtSchoolsModule {
}

