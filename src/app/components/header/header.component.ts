import { Component, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonHeader,
  IonBackButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonHeader,
    IonBackButton,
  ],
})
export class HeaderComponent implements OnInit {
  title = input('Dash3');

  constructor() {}

  ngOnInit() {}
}
