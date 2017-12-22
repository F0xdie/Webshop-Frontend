import { HttpClient } from '@angular/common/http';
import { Category } from './../models/category';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Config } from '../config';

@Injectable()
export class CategoryService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = Config.url + 'category';
   }

  public getData(): Observable<Category[]> {
    const url = this.baseUrl;
    return this.httpClient.get<Category[]>(url);

   }
}
