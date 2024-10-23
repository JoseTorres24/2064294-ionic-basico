import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.component').then((m) => m.ProductosComponent),
  },
  {
    path: 'productoDetalle/:id',  // ME EQUIVOQUE AQUIII TENIA TODO MAL REALIZADO ESTA PARTE AHHHHHH
    loadComponent: () => import('./producto-detalle/producto-detalle.component').then((m) => m.ProductoDetalleComponent),
  },
  {
    path: 'listaAlumnos',// Para poder poner el formulario en la direccion dirigirlo desdde el homePage
    loadComponent: () => import('./lista-alumnos/lista-alumnos.component').then((m) => m.ListaAlumnosComponent),
  },
  {// Por eso no me cargaba nadota:/
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full', //<--- Esto era la parte mala tenia realmente mal manejado el estado inicio al momento de iniciar ionic serve  y que ese muestre el proyecto desde la pagina de home
  }
];

