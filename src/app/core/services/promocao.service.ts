import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from 'src/core/types/types';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  public apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Promocao[]> {
      return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`)
  }
}
