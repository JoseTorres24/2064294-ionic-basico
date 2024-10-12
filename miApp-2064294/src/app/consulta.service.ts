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

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
 // Recuerde profe yo estoy usando una interface para facilitarme todo el uso en manejar variables que sea similares con el url del api que nos dio 
  getProductoDetalle(id: string): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;  // Construir la URL con el ID del producto
    return this.http.get<Producto>(url);
  }
  
}

