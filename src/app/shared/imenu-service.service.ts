import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IMenu } from '../models/imenu';
import { Observable } from 'rxjs';
import { IMenuItem } from '../models/imenu-item';
import { Iorder } from '../models/iorder';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public orderId : number = 0;
  public cart: IMenuItem[] = [];
  orderList: Iorder[] = [];
  constructor(private http: HttpClient) {}
    
    getAll() {
      return this.http.get<IMenu[]>("/assets/data/data.json");
    }

    getCart(): IMenuItem[]{
      return this.cart;
    }

    addToCart(item: IMenuItem){
      this.cart.push(item);
    }
  
    getOrders() : Iorder[]{
      return this.orderList;
    }

    addOrder(order: Iorder){
      this.orderList.push(order);
    }

    getOrderById(id: number){
      return this.orderList.find(ob => ob.id === id);
    }

    getOrderId(): number{
      return this.orderId++;
    }

}
