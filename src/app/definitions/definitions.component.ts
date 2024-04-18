import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-definitions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './definitions.component.html',
  styleUrl: './definitions.component.css'
})
export class DefinitionsComponent {

}
