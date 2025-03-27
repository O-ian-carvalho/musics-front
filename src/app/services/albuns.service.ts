import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(private client: HttpClient) {  
    } 
  
    url:string = "http://localhost:8080";
    
    getAll() : Observable<any>
    {
      return this.client.get(`${this.url}/albuns`);
    }
  
    getById(id: string | null) : Observable<any>
    {
      return this.client.get(`${this.url}/albuns/${id}`);
    }
    criarAlbum(album: { nome: string, artistaId: string }): Observable<any> {
      return this.client.post(`${this.url}/albuns`, album);
    }
}
