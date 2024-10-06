import { Component, OnInit } from '@angular/core';
import { IonList,IonItem,IonLabel,IonItemSliding,IonItemOptions,IonItemOption} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone:true,
  imports:[IonItem,IonList,CommonModule,IonLabel,IonItemSliding,IonItemOptions,IonItemOption]
})
export class ListaAlumnosComponent  implements OnInit {


   alumnos:string[] = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  constructor(private actionSheetController:ActionSheetController) { }
  ngOnInit() {}
    async agregarAFavoritos(alumno: string) {
      console.log(`${alumno} agregado a favoritos`);
    // Aquí puedes agregar la lógica para marcar al alumno como favorito
    }

    async eliminarAlumno(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirmar Eliminación',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log(`${alumno} eliminado`);
            this.alumnos = this.alumnos.filter(a => a !== alumno);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        }
      ]
    });
    await actionSheet.present();
    }
}
  
  
   
  

   

   


