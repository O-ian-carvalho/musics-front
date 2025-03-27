import { NgIf, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';
import { AlbunsService } from '../../services/albuns.service';
import { ArtistasService } from '../../services/artistas.service';

@Component({
  selector: 'app-criar-album',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './criar-album.component.html',
  styleUrl: './criar-album.component.css'
})
export class CriarAlbumComponent implements OnInit {
  albumForm: FormGroup;
  artistas: any[] = []; // Lista de artistas

  constructor(
    private fb: FormBuilder,
    private albumService: AlbunsService,
    private artistaService: ArtistasService
  ) {
    this.albumForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      artistaId: ['', Validators.required] // Campo para armazenar o ID do artista
    });
  }

  ngOnInit() {
    this.artistaService.getAll().subscribe({
      next: (data) => {
        this.artistas = data; // Armazena os artistas na lista
      },
      error: (error) => {
        console.error('Erro ao buscar artistas:', error);
      }
    });
  }

  onSubmit() {
    if (this.albumForm.valid) {
      this.albumService.criarAlbum(this.albumForm.value).subscribe({
        next: (response) => {
          console.log('Álbum criado:', response);
          alert("Album criado com sucesso!");
          this.albumForm.reset();
        },
        error: (erro) => {
          console.error('Erro ao criar álbum:', erro);
        }
      });
    } else {
      console.log('Formulário inválido');
    }
  }
}
