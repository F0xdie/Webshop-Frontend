import { CartService } from './../services/cart.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchQuery: string;
  cartItems: number;
  closeResult: string;

  constructor(private articleService: ArticleService, private modalService: NgbModal, private cartService: CartService) {
    this.searchQuery = '';
    this.cartItems  = 0;
    this.cartService.hasItemsInCart().subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }

  ngOnInit() {
  }

  setSearchQuery(searchValue: string) {
    this.articleService.setSearchQuery(searchValue);
  }

  open() {
    const modalRef = this.modalService.open(CartComponent, {size: 'lg'});
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
