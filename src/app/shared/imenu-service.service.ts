import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IMenu } from '../models/imenu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  
  constructor(private http: HttpClient) {}
    
    getAll() {
      return this.http.get<IMenu[]>("/assets/data/data.json");
    }

    getById(id: number): IMenu {
      let menu: IMenu = {
        id: 0,
        name: '',
        description: '',
        filename: '',
        location: {
          address: '',
          city: '',
          state: '',
          zip: '',
          country: ''
          
        },
        menu: []
      };
      
      this.getAll().subscribe((data) => {
        data.forEach(item => {
          if (item.id === id) {
              menu = item;
          }
           
        });
      });

      return menu;
    }

  
}
