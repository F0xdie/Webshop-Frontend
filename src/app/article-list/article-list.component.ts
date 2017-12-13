import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Array<any>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getAll().subscribe(data => this.setData(data) );
  }

  setData(data: any) {
    this.articles = data.content;
  }



}
