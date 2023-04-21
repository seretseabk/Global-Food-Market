import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/imenu';
import { IMenuItem } from '../models/imenu-item';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../shared/imenu-service.service';

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

  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService){
   
    }

    
  ngOnInit() {
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
}

  

