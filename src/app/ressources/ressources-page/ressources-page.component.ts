import { Component, OnInit, resource } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
} from '@ionic/angular/standalone';
import { EnvService } from 'src/app/services/env.service';

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
      fetch(this._env.server+'/v1/ressources').then((response) =>
        response.json()
      ),
    // loader: () => fetch('https://res.bcs-sn.com/api/v1/user/').then(response => response.json()) ,
  });

  constructor(private _env: EnvService) {}

  ngOnInit() {
    console.log(this.ressources.value());
  }
}
