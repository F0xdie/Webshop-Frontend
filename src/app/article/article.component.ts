import { Article } from './../models/article';
import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    @Input() article: Article;

   constructor() {

   }

   ngOnInit() {

   }

}
