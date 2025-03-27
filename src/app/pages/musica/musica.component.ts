import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicasService } from '../../services/musicas.service';
import { PlaylistService } from '../../services/playlist.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, FormsModule],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {
  musica: any;
  playlists: any[] = [];
  mostrarSelect: boolean = false;
  playlistSelecionada: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private musicaService: MusicasService, 
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    const musicaId = this.route.snapshot.paramMap.get('id');
    if (musicaId) {
      this.musicaService.getById(musicaId).subscribe({
        next: (data: any) => {   
          this.musica = data;
          this.musica.lancamento = new Date(this.musica.lancamento);
        },
        error: (error: any) => {
          console.error(error); 
        }
      });
    }

    this.playlistService.getAll().subscribe({
      next: (data: any) => {
        this.playlists = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  formatarDuracao(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes.toString().padStart(2, '0')}`;
  }

  adicionarAMusicaNaPlaylist(musica: any, playlistId: string | null) {
    if (!playlistId) {
      alert('Selecione uma playlist!');
      return;
    }

    this.playlistService.adicionarMusica(playlistId, musica.id).subscribe({
      next: () => {
        alert(`Música adicionada à playlist com sucesso!`);
        this.mostrarSelect = false; 
      },
      error: (error: any) => {
        console.error(error);
        alert('Erro ao adicionar música à playlist.');
      }
    });
  }
}
