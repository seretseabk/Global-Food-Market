import { Component, Input } from '@angular/core';
import { IMenu } from '../models/imenu';

@Component({
  selector: 'app-menu-tile',
  templateUrl: './menu-tile.component.html',
  styleUrls: ['./menu-tile.component.scss']
})
export class MenuTileComponent {

  @Input() public menu : IMenu = {
    id: 0,
    name: '',
    description: '',
    filename: '',
    photoname: '',
    location: {
      address : '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }
  ,
    menu: []

  };


  
}
