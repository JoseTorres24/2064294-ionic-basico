import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
  standalone: true
})
export class ProductoDetalleComponent  implements OnInit {

  constructor(private consulta:ConsultaService, private ruta :ActivatedRoute) { }

  ngOnInit() {}

}
