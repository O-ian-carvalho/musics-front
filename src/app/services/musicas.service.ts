import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface MusicData {
  nome: string;
  lancamento: string;
  duracaoEmSegundos: number;
  generoId: string;
  artistaId: string;
  albumId: string;
}


export interface MusicaDTO {
  id: string;
  nome: string;
  lancamento: string;  // Data como string (ISO 8601)
  duracaoEmSegundos: number;
  url: string;
  artista: {
    nome: string
  };
  album: {
    nome: string
  } | null;
  genero: {
    nome: string
  };
}


@Injectable({
  providedIn: 'root'
})
export class MusicasService {




  constructor(private client: HttpClient) {  
  } 

  url:string = "http://localhost:8080";
  
  getAll() : Observable<any>
  {
    return this.client.get(`${this.url}/musicas`);
  }

  getById(id: string | null) : Observable<any>
  {
    return this.client.get(`${this.url}/musicas/${id}`);
  }


  uploadMusic(data: MusicData, file: File): Observable<any> {
    const formData = new FormData();
    
    formData.append('dados', JSON.stringify(data)); // Adiciona os dados como JSON string
    formData.append('arquivo', file, file.name); // Adiciona o arquivo MP3

    return this.client.post(`${this.url}/musicas`, formData, {
      headers: new HttpHeaders({
        'Accept': '*/*' // Aceita qualquer resposta do servidor
      })
    });
  }

  buscarMusicas(
    titulo?: string,
    artista?: string,
    album?: string,
    genero?: string,
    ano?: number
  ): Observable<MusicaDTO[]> {
    let params = new HttpParams();

    if (titulo) params = params.set('titulo', titulo);
    if (artista) params = params.set('artista', artista);
    if (album) params = params.set('album', album);
    if (genero) params = params.set('genero', genero);
    if (ano) params = params.set('ano', ano.toString());

    return this.client.get<MusicaDTO[]>(`${this.url}/musicas/buscar`, { params });
  }

}
