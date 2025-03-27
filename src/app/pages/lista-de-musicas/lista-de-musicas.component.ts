import { Component } from '@angular/core';
import { MusicaDTO, MusicasService } from '../../services/musicas.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MusicaCardComponent } from "../../components/musica-card/musica-card.component";
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-de-musicas',
  standalone: true,
  imports: [NgFor, MusicaCardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './lista-de-musicas.component.html',
  styleUrls: ['./lista-de-musicas.component.css']
})
export class ListaDeMusicasComponent {

  listaDeMusicas: MusicaDTO[] = [];
  filtroForm: FormGroup;

  constructor(private service: MusicasService, private fb: FormBuilder) {
    this.filtroForm = this.fb.group({
      titulo: [''],
      artista: [''],
      album: [''],
      genero: [''],
      ano: ['']
    });
  }

  ngOnInit(): void {
    this.carregarMusicas();
  }

  carregarMusicas(): void {
    this.service.buscarMusicas().subscribe({
      next: (data) => {
        this.listaDeMusicas = data;
      },
      error: (error) => {
        console.error('Erro ao carregar músicas:', error);
      }
    });
  }

  buscar(): void {
    const { titulo, artista, album, genero, ano } = this.filtroForm.value;
    console.log("Buscando por:", titulo, artista, album, genero, ano);
  
    this.service.buscarMusicas(titulo, artista, album, genero, ano).subscribe({
      next: (data) => {
        console.log("Dados recebidos:", data);  // Verifique a resposta aqui
        this.listaDeMusicas = data;
      },
      error: (error) => {
        console.error('Erro ao buscar músicas:', error);
      }
    });
  }
}
