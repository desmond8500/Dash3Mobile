import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { homeOutline, peopleOutline, cubeOutline, hammerOutline, nuclearOutline } from 'ionicons/icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonIcon, RouterModule],
})
export class MenusComponent implements OnInit {
  constructor() {
    addIcons({ homeOutline, peopleOutline, cubeOutline, hammerOutline, nuclearOutline });
  }
  menus = [
    {
      id: 1,
      title: 'Accueil',
      url: '/index',
      icon: 'home-outline',
    },
    {
      id: 2,
      title: 'Clients',
      url: '/erp/clients',
      icon: 'people-outline',
    },
    {
      id: 3,
      title: 'Articles',
      url: '/stock/articles',
      icon: 'cube-outline',
    },
    {
      id: 4,
      title: 'Outils',
      url: '/tools/galaxy',
      icon: 'hammer-outline',
    },
    {
      id: 5,
      title: 'Ressources',
      url: '/ressources/list',
      icon: 'nuclear-outline',
    },
  ];

  ngOnInit() {}
}
