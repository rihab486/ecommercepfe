export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  adresse: string;
  ville: string;
  phone: number;
  codepostal: any;
}
export class Role {
  id: number;
  name: ERole;
}
export enum ERole {
  ROLE_CLIENT,
  ROLE_ADMIN,
  ROLE_LIVREUR
}
export class Category {
  id: number;
  name: string;
  souscategories: SCategory[] = [];
}
export class SCategory {
  id: number;
  name: string;
}
export class Product {
  id: any;
  datecmd: any;
  url: string;
  name: string;
  description: string;
  price: number;
  quantities: number
  verif: boolean;
  marque: string;
  //
  imagecolor: any;
  tailles: any;
  couleurs: any;
}
export class ProductOrder {
  product: Product;
  taille: any;
  color: any;
  quantity: number = 0;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity = 0;

  }
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
export class Order {
  id: string;
  dateCreated: any;
  status: any;
}
export class UpdateProduct {
  id: any;
  datecmd: any;
  url: string;
  name: string;
  description: string;
  price: number;
  quantities: number
  verif: boolean;
  marque: string;
  imagecolor: any;
  tailles: any;
  couleurs: any
}
export class ImageColor {
  id: string
  url: string
}
export class Couleurs {
  id: string
  name: string

}
export class Tailles {
  id?: string
  name?: string

}
export class Comment {
  id: string;
  addedAt: string;
  addedBy: string;
  message: string;
  title: string;
}
export class ReplayComment {
  id: string;
  addedAt: string;
  addedBy: string;
  messageReplay: string
}
export class Tag {
  id: any;
  name: string;
  products: Product[] = [];
}
export class Reclamation {
  id: any;
  name: string;
  addedby: string;
  message: string;
  dater: Date;
}
export class ReplayReclamation {
  id: any;
  name: string;
  addedby: string;
  replaymessage: string;
  dater: Date;
}




