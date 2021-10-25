import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailePage } from './baile.page';

const routes: Routes = [
  {
    path: '',
    component: BailePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
