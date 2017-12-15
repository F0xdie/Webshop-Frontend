import { HttpClient } from '@angular/common/http';
import { Category } from './../models/category';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    const url = '//localhost:8080/category/';
    return this.httpClient.get(url);

   }
}
