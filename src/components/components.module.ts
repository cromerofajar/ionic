import { NgModule } from '@angular/core';
import { TalksComponent } from './talks/talks';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [TalksComponent],
  imports: [
    IonicModule
  ],
	exports: [TalksComponent]
})
export class ComponentsModule {}
