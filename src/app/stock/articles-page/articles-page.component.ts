import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
  imports: [HeaderComponent, IonContent]
})
export class ArticlesPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
