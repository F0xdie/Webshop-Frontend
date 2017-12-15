import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery: string;
  constructor(private articleService: ArticleService, private modalService: NgbModal) {
    this.searchQuery = '';
  }

  ngOnInit() {
  }

  setSearchQuery(searchValue: string) {
    this.articleService.setSearchQuery(searchValue);
  }

}
