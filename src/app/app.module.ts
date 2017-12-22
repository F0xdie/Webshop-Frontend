import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { LoginComponent } from './login/login.component';
import { NavbarService } from './services/navbar.service';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'articles', component: ArticleListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    ArticleComponent,
    CategoryListComponent,
    CategoryComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  entryComponents: [CartComponent],
  providers: [ArticleService, CategoryService, CartService, NavbarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
