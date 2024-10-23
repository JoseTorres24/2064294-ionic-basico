import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonInput, IonContent, IonHeader, IonToolbar, IonTitle, ActionSheetController } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';  // Importar FormsModule para usar NgModel
import { CommonModule } from '@angular/common';
import { alumno } from 'src/Intefaces/alumno.model';
import { NgIf, NgFor } from '@angular/common';  // Importar NgIf y NgFor para las directivas estructurales

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [FormsModule,IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonInput, IonContent, IonHeader, IonToolbar, IonTitle,CommonModule, NgIf,NgFor]
})
export class ListaAlumnosComponent implements OnInit {

  alumno: alumno = {
    nombre: '',
    presente: false
  };

  alumnos: alumno[] = [];

  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  agregarAlumno(): void {
    if (this.alumno.nombre.trim() !== '') { // Verifica que el nombre no esté vacío
      this.alumnos.push({ ...this.alumno });  // Agregar clon del objeto alumno para evitar referencias
      this.alumno = {                          // Resetear el formulario
        nombre: '',
        presente: false
      };
    } else {
      console.error('El nombre del alumno no puede estar vacío.');
    }
  }
}

