import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public year;
  public date: Date;
  constructor(public toastController: ToastController) { 

    //Conseguir el año para el footer
    
    this.date = new Date();
    this.year = this.date.getFullYear();
    
  }

  ngOnInit() {
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Inicio de sesion correcto',
      duration: 1000,
      position: 'top',
      color: "success",
      
    });

    toast.present();
  }

}
