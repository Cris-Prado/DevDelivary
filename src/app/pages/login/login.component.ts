import { Component } from '@angular/core';
import { FormLayoutComponent } from "../../compenents/form-layout/form-layout.component";
import { PrimaryInputComponent } from '../../compenents/primary-input/primary-input.component';

@Component({
  selector: 'app-login',
  imports: [FormLayoutComponent, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}


