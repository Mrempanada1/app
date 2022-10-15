import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Generator } from '../../interfaces/codigo';
import { ScannerService } from '../../services/scanner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private menu:MenuController,
    private st:Storage, 
    private rt:Router,
    private srvscarnner:ScannerService
  ) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.cerrar();
    this.rt.navigate(['/login']);
  }
  async login()
  {
    await this.st.set('session',null);
  }

  verMenu(){
    this.menu.open('first');
  }

  async cerrar()
  {
    await this.st.set('sesion',null);


  }

}
