import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicaPage } from './musica.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MusicaPageRoutingModule } from './musica-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MusicaPageRoutingModule
  ],
  declarations: [MusicaPage]
})
export class MusicaPageModule {}
