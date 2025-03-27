import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbuttonsComponent } from "./components/navbuttons/navbuttons.component";
import { ListaDeMusicasComponent } from "./pages/lista-de-musicas/lista-de-musicas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbuttonsComponent, ListaDeMusicasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MusicsFront';
}
