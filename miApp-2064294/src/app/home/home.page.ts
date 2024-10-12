import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,ListaAlumnosComponent,ProductosComponent],
})
export class HomePage {
  constructor() {}
}
