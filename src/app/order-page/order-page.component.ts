import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/imenu';
import { IMenuItem } from '../models/imenu-item';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../shared/imenu-service.service';
import { Iorder } from '../models/iorder';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  

  public id: string = '';
  public menu: IMenu = {
    id: 0,
    name: '',
    description: '',
    filename: '',
    location: {
      address : '',
      city: '',
      state: '',
      zip: '',
      country: ''},
      menu: []
    };

  public menuList: IMenu[] = [];
  public mainItems : IMenuItem[] = [];
  public sideItems : IMenuItem[] = [];
  public extras : IMenuItem[] = [];
  public drinks : IMenuItem[] = [];
  public cart: IMenuItem[] = [];
  public total: number = 0.00;
  
  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService, private router: Router){
   
    }

    
  ngOnInit() {
    this.setCurrentSelectedData();
    
  }

  onMenuSelect(){
    this.setCurrentSelectedData();
  }

  setCurrentSelectedData(){

    this.mainItems = [];
    this.sideItems = [];
    this.extras = [];
    this.drinks = [];

    this.activatedRoute.paramMap.subscribe({
      next:(params) => {
        this.id = params.get("id") || "";
      }
    });

    this._menuService.getAll().subscribe({
      next:(data) => {
          this.menuList = data;

          if (this.id){
            data.forEach(item => {
              if (item.id == +this.id) {
                this.menu = item;

                item.menu.forEach(menuItem => {
                  if(menuItem.type === "Main"){
                    this.mainItems.push(menuItem);
                  } else if(menuItem.type === "Side"){
                    this.sideItems.push(menuItem);
                  } else if(menuItem.type === "Drink"){
                    this.drinks.push(menuItem);
                  } else if(menuItem.type === "Extra"){
                    this.extras.push(menuItem);
                  }
                }); 
                
              }
            })
          }
        }
          
      });
  }

  onAddToCart(item: IMenuItem){
    
    let orderItem = this.cart.find(ob => ob.name === item.name);
    console.log("Adding to Cart");

    if(orderItem != null){
      
      orderItem.count++;
    } else {
      item.count = 1;
      this.cart.push(item);
    }

    this.getTotal();

  }

  onDeleteFromCart(itemIndex: number){
    console.log("Deleting from Cart. Index: " + itemIndex)
    this.cart.splice(itemIndex, 1);
    this.getTotal();
  }

  getTotal(){
    this.total = 0;
    this.cart.forEach(item => {
      this.total += (item.count * item.price);
    });

  }

  onCheckOut(){
    let order: Iorder = {
      id: this._menuService.getOrderId() + 1,
      menuName: this.menu.name,
      location: this.menu.location,
      total: this.total,
      items: this.cart,
      complete: false
    }

    this._menuService.addOrder(order);
    this.router.navigate(['/checkout', this._menuService.getOrderId()]);
    console.log("Orders:");
    console.log(this._menuService.getOrders());
  }
}

  

