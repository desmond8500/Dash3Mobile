import { Component, OnInit, resource } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-ressources-page',
  templateUrl: './ressources-page.component.html',
  styleUrls: ['./ressources-page.component.scss'],
  imports: [HeaderComponent, IonContent, IonGrid, IonRow, IonCol, IonImg],
})
export class RessourcesPageComponent implements OnInit {
  defaultLogo = '../assets/img/photo.png'
  ressources = resource({
    loader: () =>
      fetch('http://localhost:8000/api/v1/ressources').then((response) =>
        response.json()
      ),
    // loader: () => fetch('https://res.bcs-sn.com/api/v1/user/').then(response => response.json()) ,
  });

  constructor() {}

  ngOnInit() {
    console.log(this.ressources.value());
  }
}
