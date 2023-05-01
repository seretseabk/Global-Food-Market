import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/imenu-service.service';
import { Iorder } from '../models/iorder';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  public order: Iorder;
  public id: string;
  public valid: boolean = false;
  public submitted: boolean = false;
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService, private _fb: FormBuilder){

  }
  ngOnInit() {

    this.form = this._fb.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });

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
    this.valid = false;

    if (!ngForm.valid) {
      this.valid = false;
      return;
    } 

    console.log(ngForm);
    ngForm.resetForm();
    this.order.complete = true;
    this.submitted = true;
    
  }
}
