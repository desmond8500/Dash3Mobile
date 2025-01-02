import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [RouterModule, IonText],
})
export class HomePageComponent  implements OnInit {

  constructor() {
  }

  ngOnInit() {}

}
