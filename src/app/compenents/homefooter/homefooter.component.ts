import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homefooter',
  imports: [CommonModule],
  templateUrl: './homefooter.component.html',
  styleUrl: './homefooter.component.css'
})
export class HomefooterComponent {
  nameDeveloper: string = 'Cristiano Prado';

  currentDate: Date = new Date(); // Obtém a data atual


}
