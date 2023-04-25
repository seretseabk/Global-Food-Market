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


  
}
