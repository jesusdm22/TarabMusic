import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'musica.page.html',
  styleUrls: ['musica.page.scss']
})
export class MusicaPage {

  public boxes = new Array();


  constructor() {

    //Funcion para cargar las tarjetas de eventos
    for(let i = 0; i < 12; i++) {
      this.boxes.push(i);
    }

  }

}
