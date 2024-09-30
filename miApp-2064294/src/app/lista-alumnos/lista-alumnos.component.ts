import { Component, OnInit } from '@angular/core';
import { IonList,IonItem } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone:true,
  imports:[IonItem,IonList,CommonModule]
})
export class ListaAlumnosComponent  implements OnInit {


   alumnos:any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  constructor() { }

  ngOnInit() {}
  
  
   
  

   

   

}
