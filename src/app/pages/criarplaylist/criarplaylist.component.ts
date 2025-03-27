import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-criarplaylist',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './criarplaylist.component.html',
  styleUrl: './criarplaylist.component.css'
})
export class CriarplaylistComponent {
  playlistForm: FormGroup;

  constructor(private fb: FormBuilder, private service: PlaylistService) {
    this.playlistForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.playlistForm.valid) {
      this.service.criarPlaylist(this.playlistForm.value).subscribe({
        next: (response) => {
          console.log('Playlist criada:', response);
          alert("Playlist criada com sucesso!");
          this.playlistForm.reset();
          
        },
        error: (erro) => {
          console.error('Erro ao criar playlist:', erro);
        }
      });
    } else {
      console.log('Form inválido');
    }
  }
}
