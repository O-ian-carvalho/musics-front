import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private client: HttpClient) {  
      } 
    
      url:string = "http://localhost:8080";
      
      getAll() : Observable<any>
      {
        return this.client.get(`${this.url}/artistas`);
      }
    
      getById(id: string | null) : Observable<any>
      {
        return this.client.get(`${this.url}/artistas/${id}`);
      }
}
