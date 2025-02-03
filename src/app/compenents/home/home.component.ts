import { Component } from '@angular/core';
import { LogoheaderComponent } from '../logoheader/logoheader.component';
import { RouterLink } from '@angular/router';
import { HomefooterComponent } from "../homefooter/homefooter.component";

@Component({
  selector: 'app-home',
  imports: [LogoheaderComponent, HomefooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
