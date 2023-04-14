import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IMenu } from '../models/imenu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public menuList : IMenu[] = [] ;
  constructor(private http: HttpClient) { 

    this.http.get("/assets/data/data.json").subscribe((data: any) => {
        this.menuList = data;
    });
    
  }

  
}
