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
      const dummyCategory = new Category();
      dummyCategory.active = true;
      dummyCategory.name = 'Alle Kategorien';
      this.categories.push(dummyCategory);
      this.categories.sort((cat1, cat2) => {
          if (cat1.name > cat2.name) {
              return 1;
         }else if (cat2.name > cat1.name) {
           return -1;
         }else {
           return 0;
         }
      });
    });
  }

  categoryChanged(category: Category){
    this.categories.filter(cat => cat.active === true).forEach(cat => {
      cat.active = false;
    });
    category.active = true;
    this.articleService.setCategoryChoice(category.name);
    if (category.name === 'Alle Kategorien') {
      this.articleService.setCategoryChoice('');
    }
  }

  // categoryReset() {
  //   this.articleService.setCategoryChoice('');
  //   this.categories.filter(cat => cat.active === true).forEach(cat => {
  //     cat.active = false;
  //   });
  // }

}
