import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MusicasService } from '../../services/musicas.service';
import { AlbunsService } from '../../services/albuns.service';
import { ArtistasService } from '../../services/artistas.service';
import { GeneroService } from '../../services/genero.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-criar-musica',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './criar-musica.component.html',
  styleUrl: './criar-musica.component.css'
})
export class CriarMusicaComponent implements OnInit {
  musicaForm: FormGroup;
  artistas: any[] = [];
  albuns: any[] = [];
  generos: any[] = [];
  arquivo: File | null = null;

  constructor(
    private fb: FormBuilder,
    private musicaService: MusicasService,
    private albumService: AlbunsService,
    private artistaService: ArtistasService,
    private generoService: GeneroService
  ) {
    this.musicaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      lancamento: ['', Validators.required],
      duracaoEmSegundos: ['', [Validators.required, Validators.min(10)]],
      generoId: ['', Validators.required],
      artistaId: ['', Validators.required],
      albumId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.artistaService.getAll().subscribe({
      next: (data) => (this.artistas = data),
      error: (error) => console.error('Erro ao buscar artistas:', error)
    });

    this.albumService.getAll().subscribe({
      next: (data) => (this.albuns = data),
      error: (error) => console.error('Erro ao buscar álbuns:', error)
    });

    this.generoService.getAll().subscribe({
      next: (data: any[]) => (this.generos = data),
      error: (error: any) => console.error('Erro ao buscar gêneros:', error)
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.arquivo = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.musicaForm.valid && this.arquivo) {
      const formData = this.musicaForm.value;

      this.musicaService.uploadMusic(formData, this.arquivo).subscribe({
        next: () => {
          alert('Música enviada com sucesso!');
          this.musicaForm.reset();
          this.arquivo = null;
        },
        error: (erro) => {
          console.error('Erro ao enviar música:', erro);
          alert('Erro ao enviar música.');
        }
      });
    } else {
      alert('Preencha todos os campos corretamente e selecione um arquivo!');
    }
  }
}
