import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbuttons',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbuttons.component.html',
  styleUrl: './navbuttons.component.css'
})
export class NavbuttonsComponent {

}
