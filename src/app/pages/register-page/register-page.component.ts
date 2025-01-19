import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonInput,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports: [IonInput, IonItem, IonButton, RouterModule ]
})
export class RegisterPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
