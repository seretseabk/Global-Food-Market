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
export class OrderPageComponent {
  

  public id: string;
  public menu: IMenu;
  public menuList: IMenu[];
  public mainItems : IMenuItem[];
  public sideItems : IMenuItem[];
  public extras : IMenuItem[];
  public drinks : IMenuItem[];

  constructor(public activatedRoute: ActivatedRoute, public _menuService: MenuService){
    this.activatedRoute.paramMap.subscribe({
      next:(params) => {
        this.id = params.get("id") || "";
      }
    });

    if (this.id){
      this.menu = _menuService.getById(+this.id);
    }
  }
    
}

  

