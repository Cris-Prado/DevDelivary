import { Component } from '@angular/core';
import { FormLayoutComponent } from "../../compenents/form-layout/form-layout.component";
import { PrimaryInputComponent } from '../../compenents/primary-input/primary-input.component';

@Component({
  selector: 'app-cadastro',
  imports: [FormLayoutComponent, PrimaryInputComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
