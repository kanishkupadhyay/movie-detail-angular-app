import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  constructor(private http :HttpClient) { 
    
  }
omdb(title:any){
  return this.http.get(`http://www.omdbapi.com/?t=${title}&apikey=e3b80746`)
}


}

