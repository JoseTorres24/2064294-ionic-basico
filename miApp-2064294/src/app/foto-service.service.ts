import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  
  public photos: UserPhoto[] = []; // Array para almacenar las fotos capturadas
  private PHOTO_STORAGE: string = 'photos'; // Clave de almacenamiento

  constructor() { }

  public async addNewToGallery() {
    // Toma la foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Guarda la foto en el sistema de archivos y en las preferencias
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);

    // Guarda la referencia de las fotos en las preferencias
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  }

  private async savePicture(photo: Photo): Promise<UserPhoto> {
    // Convierte la foto a formato base64 para guardarla en el sistema de archivos
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = await this.convertBlobToBase64(blob) as string;

    // Guarda la foto en el sistema de archivos
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    // Retorna la información de la foto guardada
    return {
      filepath: savedFile.uri,
      webviewPath: photo.webPath
    };
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}

// Define la interfaz para la estructura de las fotos de usuario
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
