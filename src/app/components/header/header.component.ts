import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonHeader,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule, IonToolbar, IonTitle, IonButtons, IonButton, IonHeader],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
