import { Component, OnInit } from '@angular/core';
import { IMenu } from '../models/imenu';
import { MenuService } from '../shared/imenu-service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit {
  public menuList: IMenu[] = [];
  public selectedMenu: IMenu;
  public searchText: string;

  
  constructor(private _menuService: MenuService, route: ActivatedRoute){
    route.queryParams.subscribe(p => 
      this.searchText = p['search']
      );
  }

  ngOnInit(){
    this.getAllMenu();
  }


  getAllMenu(){
    this._menuService.getAll().subscribe((data) => {
      this.menuList = data;
      console.log("Data in Homepage:");
      console.log(data);
    });
  }
  


}
