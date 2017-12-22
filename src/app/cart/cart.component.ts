import { CartItem } from './../models/cart-item';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  selectedArticles: CartItem[];

  constructor(public cartService: CartService, public activeModal: NgbActiveModal) {
    this.selectedArticles = new Array();
  }

}
