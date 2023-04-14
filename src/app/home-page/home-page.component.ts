import { Component } from '@angular/core';
import { IMenu } from '../models/imenu';
import { MenuService } from '../shared/imenu-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public menuList : IMenu[] = [];

  constructor(private _menuService: MenuService){
    this.menuList = _menuService.menuList;
  }
}
