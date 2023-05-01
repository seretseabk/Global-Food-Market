import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  public searchText: string;
  @Output() updateSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){

  }
  updateSearchText(text: string) {
     this.router.navigate([], { 
       queryParams: {
        search: this.searchText
       }
      });

  }
}
