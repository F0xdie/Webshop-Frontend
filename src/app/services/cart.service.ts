import { Observable } from 'rxjs/Observable';
import { Article } from './../models/article';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private  httpClient: HttpClient) { }

  private cartSubject = new Subject<CartState>();
  Article: article[]= [];
  CartState = this.cartSubject.asObservable();

  addProduct(_article:any) {
    console.log('in service');
    this.Article.push(_article)
    this.cartSubject.next(<CartState>{loaded: true, article:  this.Article});
  }
  removeArticle(id: number) {
    this.Article = this.Article.filter((_item) =>  _item.id !== id )
    this.cartSubject.next(<CartState>{loaded: false , article:  this.Article});
  }

getAllArticles(): Observable <any> {
  return this.httpClient.get(url);
}

}
}
