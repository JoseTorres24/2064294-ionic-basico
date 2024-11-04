import { Component } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { UserPhoto } from '../foto-service.service'; // Asegúrate de que la interfaz esté disponible
import { IonButton, IonIcon, IonHeader, IonContent, IonGrid, IonCol, IonRow,IonTitle,IonToolbar} from '@ionic/angular/standalone';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  standalone: true,
  styleUrls: ['./camara.component.scss'],
  imports: [IonButton, IonIcon, NgFor, IonHeader, IonContent, NgIf, IonGrid, IonCol, IonRow,IonTitle,IonToolbar]
})
export class CamaraComponent {
  public photos: UserPhoto[] = []; // Arreglo para almacenar las fotos

  constructor(private fotoService: FotoServiceService) { }

  async ngOnInit() {
    // Inicializar el arreglo de fotos desde el servicio
    this.photos = this.fotoService.photos;
  }

  // Método para tomar una nueva foto y agregarla al arreglo
  async tomarFoto() {
    await this.fotoService.addNewToGallery();
    this.photos = this.fotoService.photos; // Actualiza las fotos mostradas
  }
}
