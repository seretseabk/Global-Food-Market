import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/imenu';
import { MenuService } from '../shared/imenu-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit {
  public menuList: IMenu[] = [];
  public selectedMenu: IMenu;
  
  constructor(private _menuService: MenuService){
   
  }

  ngOnInit(){
    this._menuService.getAll().subscribe((data) => {
      console.log(data);
      this.menuList = data;
    });
  }

}
