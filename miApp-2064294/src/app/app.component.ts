import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonHeader, IonContent, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
