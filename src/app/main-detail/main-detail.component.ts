import { Component, Input } from '@angular/core';
import { IMenu } from '../models/imenu';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent {
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
