import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public boxes = new Array();


  constructor(public opciones : ActionSheetController) {
    
    for(let i = 0; i < 12; i++){
      this.boxes.push(i);
    }

   }

  ngOnInit() {
  }


  async showOpciones() {
    const actionSheet = await this.opciones.create({
      header: 'Configuración',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Actualizar a premium',
        icon: 'checkmark-circle',
        handler: () => {
          console.log('Pasar a premium');
        }
      }, {
        text: 'Editar mi perfil',
        icon: 'create',
        handler: () => {
          console.log('Editar perfil');
        }
      }, {
        text: 'Cerrar sesión',
        icon: 'exit',
        role: 'destructive',
        handler: () => {
          console.log('Cerrar sesión');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Accion cancelada');
        }
      }]
    });
    await actionSheet.present();
  }


}
