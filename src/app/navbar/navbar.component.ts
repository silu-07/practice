import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuItem, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, MatButtonModule, MatMenuModule, MatIconModule, MatMenuItem],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  @Output()
  isActiveChange: EventEmitter<boolean> | undefined
  
}
