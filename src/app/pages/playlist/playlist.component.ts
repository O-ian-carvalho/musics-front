import { Component } from '@angular/core';
import { MusicaCardComponent } from "../../components/musica-card/musica-card.component";
import { PlaylistService } from '../../services/playlist.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MusicaCardComponent, NgFor],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  playlist:any;
  constructor(private route: ActivatedRoute, private service: PlaylistService) {
  
      
    }
  
    ngOnInit() {
   
      this.service.getById(this.route.snapshot.paramMap.get('id')).subscribe({
        next: (data: any) => {   
          this.playlist = data;  
          console.log(data);
        },
        error: (error: any) => {
          console.error(error); 
        }
      });
    }
}
