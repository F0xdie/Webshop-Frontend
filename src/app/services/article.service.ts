import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Article } from '../models/article';
import { Pageable } from '../models/pageable';

@Injectable()
export class ArticleService {

   page: number;
   size: number;
   total: number;
   private searchQuery: string;
   private categoryChoice: string;

   subject: Subject<Article[]>;

  constructor(private httpClient: HttpClient) {
    this.total = 0;
    this.size = 12;
    this.page = 0;
    this.searchQuery = '';
    this.categoryChoice = '';
  }

  public setSearchQuery(searchQuery: string ) {
    this.searchQuery = searchQuery;
    this.getData();
  }

  public setCategoryChoice(categoryChoice: string) {
    this.categoryChoice = categoryChoice;
    this.getData();
  }

  public getData(): Observable<Article[]> {
    let pageForRequest = this.page;

    if ( pageForRequest > 0 ) {
       pageForRequest -= 1 ;
    }

    let url = '//localhost:8080/articles/?page=' + pageForRequest + '&size=' + this.size;

    if (this.subject === undefined) {
     this.subject = new Subject<Article[]>();
    }

    if (this.searchQuery !== '') {
      url = url + '&searchQuery=' + this.searchQuery;
    }

    if (this.categoryChoice !== '') {
      url = url + '&category=' + this.categoryChoice;
    }

    this.httpClient.get<Pageable>(url).subscribe(data => {
       this.size = data.size;
       this.total = data.totalElements;

       const content = <Article[]>data.content;
       this.subject.next(content);

    });
    return this.subject.asObservable();
   }
}
