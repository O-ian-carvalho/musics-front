import { Component } from '@angular/core';
import { AlbunsService } from '../../services/albuns.service';
import { ActivatedRoute } from '@angular/router';
import { MusicaCardComponent } from "../../components/musica-card/musica-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [MusicaCardComponent, NgFor],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
 album:any;
  constructor(private route: ActivatedRoute, private service: AlbunsService) {
  
      
    }
  
    ngOnInit() {
   
      this.service.getById(this.route.snapshot.paramMap.get('id')).subscribe({
        next: (data: any) => {   
          this.album = data;  
          console.log(data);
        },
        error: (error: any) => {
          console.error(error); 
        }
      });
    }

}
