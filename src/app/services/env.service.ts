import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  // Logos
  img_hibou = '../../assets/img/hibou.png';
  img_bouclier = '../../assets/img/bouclier.png';
  img_photo = '../../assets/img/photo.png';

  dev_server = 'http://localhost:8000/api';
  prod_server = 'https://res.bcs-sn.com/api';

  server = this.prod_server;

  constructor() {}
}
