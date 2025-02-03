import { Component, Input } from '@angular/core';
import { HomefooterComponent } from "../homefooter/homefooter.component";
import { LogoheaderComponent } from "../logoheader/logoheader.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-layout',
  imports: [HomefooterComponent, LogoheaderComponent, RouterLink],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.css'
})
export class FormLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
}
