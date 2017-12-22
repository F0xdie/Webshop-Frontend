import { Article } from './article';

export class CartItem {
    article: Article;
    private amount: number;

    constructor(article: Article) {
        this.article = article;
        this.amount = 1;
    }

    public increaseAmount() {
        this.amount++;
    }

    public getAmount(): number {
        return this.amount;
    }
}
