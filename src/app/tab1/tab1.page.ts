import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { DatabaseService } from '../services/database.service';
import { MenusComponent } from '../components/menus/menus.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent, HeaderComponent, MenusComponent],
})
export class Tab1Page {
  // constructor(private database: DatabaseService) {
  //   this.initApp();
  // }

  async initApp(){
    // await this.database.initializePlugin();
    // SplashScreen.hide();
  }
}
