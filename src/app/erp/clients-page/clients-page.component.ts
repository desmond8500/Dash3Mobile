import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
  imports: [HeaderComponent, IonContent],
})
export class ClientsPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
