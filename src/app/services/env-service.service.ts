import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvServiceService {

  constructor() { }

  getServerLink(){
    return 'https://res.bcs-sn.com/api';
  }
}
