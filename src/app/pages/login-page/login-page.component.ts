import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonText, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonContent, IonText, IonInput, IonItem, IonButton, RouterModule ]
})
export class LoginPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
