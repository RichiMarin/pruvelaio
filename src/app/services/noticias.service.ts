import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='
                 + parametros.pais + '&category='+ parametros.categoria + '&apiKey=12a2870ad8914fd39d478a496ad37417'
                return this.http.get(URL);
  }
}
