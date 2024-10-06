import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './productos/productos.component'; // Asegúrate de que esta ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de la API

  constructor(private http: HttpClient) { }

  // Especifica el tipo de retorno como Observable<Producto[]>
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl); // Se especifica el tipo de datos aquí
  }
}

