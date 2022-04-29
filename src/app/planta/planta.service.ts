import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Planta } from './Planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = environment.baseUrl + '/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }

}
