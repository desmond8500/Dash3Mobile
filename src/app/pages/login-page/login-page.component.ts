import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonInput, IonItem, IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonInput, IonItem, IonButton, RouterModule, IonText ]
})
export class LoginPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
