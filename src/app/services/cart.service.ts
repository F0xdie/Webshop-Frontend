import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CartItem } from './../models/cart-item';
import { Article } from './../models/article';
import { Injectable, Input } from '@angular/core';

@Injectable()
export class CartService {
  private selectedArticles: CartItem[];
  private subject: Subject<number>;
  @Input() filledCart: boolean;

  constructor() {
    this.subject = new Subject<number>();
    this.selectedArticles = new Array();
    this.filledCart = false;
  }

  addArticle(article: Article) {
    const filteredList = this.selectedArticles.filter(item => item.article.articleID === article.articleID);
    if (filteredList.length > 0) {
      const item = filteredList[0];
      item.increaseAmount();
    } else {
      const newItem = new CartItem(article);
      this.selectedArticles.push(newItem);
      this.filledCart = true;
    }

    this.subject.next(this.selectedArticles.length);
  }

  public hasItemsInCart(): Observable<number> {
    return this.subject.asObservable();
  }

  removeArticle() {

  }

  getSelectedArticles(): CartItem[] {
    return this.selectedArticles;
  }

}
