import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonText } from '@ionic/angular/standalone';
import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [RouterModule, IonText, ButtonModule, LoginPageComponent, RegisterPageComponent],
})
export class HomePageComponent implements OnInit {
  select = 0

  constructor() {}

  ngOnInit() {}

  toggleSelect(select: number) {
    this.select = select
  }
}
