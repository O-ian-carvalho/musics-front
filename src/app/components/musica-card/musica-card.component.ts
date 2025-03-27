import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-musica-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './musica-card.component.html',
  styleUrl: './musica-card.component.css'
})
export class MusicaCardComponent {
  @Input() id!: string;
  @Input() nome!: string;
  @Input() artista!: string;
  @Input() genero!: string;
}
