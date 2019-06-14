import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit 
{
  User={
    Email:"",
    Usuario:"",
    Contraseña:"",
    RepitalaContraseña:"",
  }

  constructor(public loadingCtrl:LoadingController) { }

  ngOnInit() {
   }

  
  async login(forma: NgForm)
  {
    if (forma.valid)
    {
       const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles',
        duration: 2000
      });
      loading.present();
      this.User.Email = forma.value.email;
      this.User.Usuario = forma.value.User;
      this.User.Contraseña = forma.value.clave;
      this.User.RepitalaContraseña = forma.value.clave;
      this.loadingCtrl.dismiss();

      console.log("ingreso al login");

      if(this.User.Usuario === forma.value.user)
      {
       
        console.log("verdadero");
      }
      else{
        console.log("falso");
      }
    }
    
  }
}
