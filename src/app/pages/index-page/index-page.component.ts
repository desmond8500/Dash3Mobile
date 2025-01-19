import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MenusComponent } from 'src/app/components/menus/menus.component';
import { IonContent } from '@ionic/angular/standalone';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  imports: [
    HeaderComponent,
    IonContent,
    MenusComponent,
    ButtonModule,
    FloatLabelModule,
  ],
})
export class IndexPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
