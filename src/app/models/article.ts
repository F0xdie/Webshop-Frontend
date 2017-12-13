import { Category } from './category';
export class Article {
  articleID: number;
  serialNr: string;
  description: string;
  stock: number;
  eancode: string;
  visible: boolean;
  category: Category;

  constructor() {

  }
  // List<OrderPosition>: orderPositions;
  // StorageLocation: storageLocation;
  // Category: category;
}
