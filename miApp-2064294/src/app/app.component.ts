import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonHeader } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen/';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonHeader, IonContent, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.MostrarSplashScreen();
  }

  async MostrarSplashScreen(){
    await SplashScreen.show({ // Mostrar en la aplicaciopn
      showDuration: 2000,
      autoHide: true,
      
    });
    console.log("Ejecutado el splashScreen");
  }

}
