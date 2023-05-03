import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/imenu-service.service';
import { Iorder } from '../models/iorder';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  public order: Iorder;
  public id: string;
  public invalid: boolean = false;
  public submitted: boolean = false;
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private _menuService: MenuService, private _fb: FormBuilder){

  }
  ngOnInit() {

    this.form = this._fb.group({
      creditCard: ['', [Validators.required]],
      expirationDate: ['', [Validators.required, CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
      phone: ['', [Validators.required]]
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
    this.invalid = false;
    this.submitted = true;
    console.log(this.form.controls['creditCard'].errors);
    if (!ngForm.valid) {
      this.invalid = true;
      return;
    } 

    ngForm.resetForm();
    this.order.complete = true;
    
  }
}
