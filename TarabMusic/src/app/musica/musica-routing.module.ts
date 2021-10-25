import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaPage } from './musica.page';

const routes: Routes = [
  {
    path: '',
    component: MusicaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaPageRoutingModule {}
