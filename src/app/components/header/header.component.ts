import { Component, OnInit } from '@angular/core';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonHeader,
  IonSearchbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToolbar, IonTitle, IonButtons, IonButton, IonHeader, IonSearchbar],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
