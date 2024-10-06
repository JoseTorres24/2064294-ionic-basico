import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonItem, IonList, IonButton,IonContent, IonGrid,IonCol, IonRow,IonHeader, IonToolbar,IonModal,IonTitle,IonCardTitle,IonButtons} from '@ionic/angular/standalone';
import { ChangeDetectorRef } from '@angular/core';




export interface Producto {  // Define la interfaz para el producto
  title: string;
  description: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [NgFor, IonCard, IonList, IonCardContent, IonItem, IonCardHeader, IonButton,NgIf,IonGrid,IonContent,IonCol,IonRow,IonToolbar,IonHeader,IonModal,IonTitle,IonCardTitle,IonButtons]
})
export class ProductosComponent implements OnInit {
  
  constructor(private consulta: ConsultaService, private cdr: ChangeDetectorRef) {}
 
  ngOnInit() {
    this.consulta.getProductos().subscribe((res: Producto[]) => {
      this.productos = res;  // Asegúrate de que res sea de tipo Producto[]
      console.log(this.productos);
    }, error => {
      console.error('Error al obtener productos:', error); // Manejo de errores
    });
  }

  mostrarDetalles(producto: Producto) {
    this.productoSeleccionado = producto;
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }
  
  cerrarDetalles() {
    this.productoSeleccionado = null;
    this.cdr.detectChanges(); // Forzar la detección de cambios al cerrar
  }
  productos: Producto[] = [];  // Cambia el tipo a Producto[]
  productoSeleccionado: Producto | null = null;  // Cambia el tipo a Producto | null
}






