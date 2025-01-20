import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonTitle,
    IonToolbar,
    IonFooter,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  closeApp() {
    App.exitApp(); // Closes the app
  }
}
