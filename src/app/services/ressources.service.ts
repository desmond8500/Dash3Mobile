import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvServiceService } from './env-service.service';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  server: string = this._env.getServerLink()
  constructor(
    private _env: EnvServiceService,

  ) { }

  // Ressources

  // getRessources():Observable<any>{
  //   return this._http.get(this.server+'/v1/ressources')
  // }
  // addRessource(postForm:any):Observable<any>{
  //   return this._http.post(this.server+'/', postForm)
  // }
  // updateRessource(postForm :any):Observable<any>{
  //   return this._http.patch(this.server+'/'+postForm.id, postForm)
  // }
  // deleteRessource(postForm :any):Observable<any>{
  //   return this._http.delete(this.server+'/'+postForm.id)
  // }
}
