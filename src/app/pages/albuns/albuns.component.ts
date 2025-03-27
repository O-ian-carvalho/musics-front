import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbunsService } from '../../services/albuns.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.css'
})
export class AlbunsComponent {

  listaDeAlbuns: any[] = [];
  
    constructor(private service: AlbunsService)
    {
      this.service.getAll().subscribe({
        next: (data) => {   
          this.listaDeAlbuns = data;
          console.log(data);
        },
        error: (error) => {
          console.error(error); 
        }
      });
    }
}
