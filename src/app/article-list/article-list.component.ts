import { Article } from './../models/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [NgbPaginationConfig]
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService, config: NgbPaginationConfig) {
    this.articles = new Array();
    this.loadData();
   }

  ngOnInit() {
    // this.articleService.getAll().subscribe(data => this.setData(data) );
  }

  // setData(data: any) {
  //   this.articles = data.content;
  // }


  loadPage(event: any) {
      this.loadData();
  }

  private loadData() {
    this.articleService.getData().subscribe(data => {
      this.articles = data;
    });
  }





}
