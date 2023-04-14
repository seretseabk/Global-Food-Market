import { Component } from '@angular/core';
import { IMenu } from './models/imenu';
import {MenuService} from './shared/imenu-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Global-Food-Market';

}
