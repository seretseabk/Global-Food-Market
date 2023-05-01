import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/imenu-service.service';
import { Iorder } from '../models/iorder';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  public order: Iorder;
  public id: string;
  public saveUnsuccessful: boolean = false;
  public submitted: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService){

  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next:(params) => {
        this.id = params.get("id") || "";
      }
    });

    if (this.id) {
      this.order = this._menuService.getOrderById(+this.id) as Iorder;
    }
  }

  onSubmit(ngForm: NgForm){
    this.saveUnsuccessful = false;

    if (!ngForm.valid) {
      this.saveUnsuccessful = true;
      return;
    }

    console.log(ngForm);
    ngForm.resetForm();
    this.order.complete = true;
    this.submitted = true;
    
  }
}
