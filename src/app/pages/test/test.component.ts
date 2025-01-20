import { Component, OnInit } from '@angular/core';
import { IonCol, IonRow, IonGrid, IonContent } from '@ionic/angular/standalone'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [IonCol, IonRow, IonGrid, IonContent],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
