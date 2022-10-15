import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Usuario } from './../../interfaces/usuario';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario: Usuario = {
    username: '',
    password: '',
    correo: ''
  }

  constructor (private storage: Storage, private router:Router){ }

  ngOnInit() {
 
  }
  onSubmit() {
    console.log(this.usuario)
    this.guardar()
  }
  
  async guardar(){
    let user=await this.storage.get(this.usuario.username)
    if(user==null){
      await this.storage.set(this.usuario.username,this.usuario)
      console.log("Registrado");
      this.router.navigate(['/login']);
    }
    else{
      console.log("Usuario ya registrado")     
    }
  }
}

