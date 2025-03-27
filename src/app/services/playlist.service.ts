import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private client: HttpClient) {  
    } 
  
    url:string = "http://localhost:8080";
    
    getAll() : Observable<any>
    {
      return this.client.get(`${this.url}/playlists`);
    }
  
    getById(id: string | null) : Observable<any>
    {
      return this.client.get(`${this.url}/playlists/${id}`);
    }

    criarPlaylist(playlist: { nome: string }): Observable<any> {
      return this.client.post(`${this.url}/playlists`, playlist);
    }


    adicionarMusica(playlistId: string | null, musicaId: string | null): Observable<any>{
      return this.client.post(`${this.url}/playlists/${playlistId}/musicas/${musicaId}`, null);
    }
}
