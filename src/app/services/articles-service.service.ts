import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  constructor(private http: HttpClient) { }

  getJsonArticles() {
    return this.http.get('./assets/data/articulos.json')
      .pipe(map( (articleResponse: any) => {
        return articleResponse;
    }));
  }
}
