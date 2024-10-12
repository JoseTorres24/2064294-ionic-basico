import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';
import { IonContent,IonCard,IonCardContent,IonCardTitle,IonToolbar,IonTitle,IonHeader } from '@ionic/angular/standalone';
import { CurrencyPipe } from '@angular/common';// Aqui esta el import del Currency :C
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
  imports:[IonCard,IonCardContent,IonContent,IonCardTitle,CurrencyPipe,NgIf,IonToolbar,IonTitle,IonHeader],
  standalone: true
})
export class ProductoDetalleComponent implements OnInit {
 // Intentare implementar interface aca abajo
 //|
 //v
  producto: any = {};  // Aquí se almacenará el producto

  constructor(private consulta: ConsultaService, private ruta: ActivatedRoute) { }

  ngOnInit() {//obvi si selccionamos el producto en productos component
    const idProducto = this.ruta.snapshot.paramMap.get('id'); // Obtener el 'id' de la URL
    if (idProducto) {
      this.realizarConsultaDetalle(idProducto);  // Realizar la consulta para obtener los detalles del producto
    }
  }

  realizarConsultaDetalle(idProducto: string): void {
    this.consulta.getProductoDetalle(idProducto)
      .subscribe((resp: Object) => {
        console.log(resp); // Imprimir la respuesta en la consola para depuración
        this.producto = resp; // Asignar la respuesta a 'producto'
      });
  }
}

