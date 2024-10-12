import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'productos',
    component: ProductosComponent,
    loadComponent: ()=> import('./productos/productos.component').then((m)=> m.ProductosComponent),
    pathMatch: 'full' 
  },
  {
    path:'productos/:id',
    loadComponent:() =>import('./producto-detalle/producto-detalle.component').then((m) =>m.ProductoDetalleComponent)
  },
  
];
