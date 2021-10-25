import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage implements OnInit {

  public online = new Array();
  public recent = new Array();
  
  constructor() { 

    for(let i = 0; i< 9; i++) {
      this.online.push(i);
    }

    for(let i = 0; i< 2; i++) {
      this.recent.push(i);
    }
  }

  ngOnInit() {
  }

}
