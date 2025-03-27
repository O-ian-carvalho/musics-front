import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private client: HttpClient) {  
      } 
    
      url:string = "http://localhost:8080";
      
      getAll() : Observable<any>
      {
        return this.client.get(`${this.url}/generos`);
      }
    
}
