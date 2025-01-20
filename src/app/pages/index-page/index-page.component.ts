import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MenusComponent } from 'src/app/components/menus/menus.component';
import { IonContent } from '@ionic/angular/standalone';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
  imports: [HeaderComponent, IonContent, MenusComponent, TabsComponent],
})
export class IndexPageComponent implements OnInit {
  title = 'Dashboard';
  constructor() {}

  ngOnInit() {}
}
