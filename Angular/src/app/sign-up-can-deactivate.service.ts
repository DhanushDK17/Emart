

import { Injectable } from '@angular/core';

import { CanDeactivate } from '@angular/router';
import { BuyerSignupComponent } from './emart/signup/buyer-signup/buyer-signup.component';
@Injectable()
export class SignUpDeactivateService implements CanDeactivate<BuyerSignupComponent>{
    canDeactivate(component: BuyerSignupComponent): boolean {
        if (component.buyerSignupForm.dirty) {
            return confirm('sure?');
        }
        else {
            return true;
        }
    }
}