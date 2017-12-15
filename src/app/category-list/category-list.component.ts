import { CategoryService } from './../services/category.service';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Category[];

  constructor(private categoryService: CategoryService, private articleService: ArticleService) { }

  ngOnInit() {
    this.categoryService.getData().subscribe(data => {
      this.categories = data;
    });
  }

  categoryChanged(category: Category){
    this.categories.filter(cat => cat.active === true).forEach(cat => {
      cat.active = false;
    });
    category.active = true;
    this.articleService.setCategoryChoice(category.name);
  }

}
