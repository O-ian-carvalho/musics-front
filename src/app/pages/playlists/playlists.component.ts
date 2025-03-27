import { Component } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
 listaDePlaylists: any[] = [];
  
    constructor(private service: PlaylistService)
    {
      this.service.getAll().subscribe({
        next: (data) => {   
          this.listaDePlaylists = data;
          console.log(data);
        },
        error: (error) => {
          console.error(error); 
        }
      });
    }
}
