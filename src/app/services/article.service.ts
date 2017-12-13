import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {

   page: number;
   size: number;
   total: number;

  constructor(private http: HttpClient) {
    this.size = 10;
    this.page = 0;
  }

  getAll(): Observable<any> {
    const url = '//localhost:8080/articles/?page=' + this.page + '&size=' + this.size;
    return this.http.get(url).map().subsribe();
  }

}
