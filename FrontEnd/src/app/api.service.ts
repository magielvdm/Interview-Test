import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //Het list of heroes api
  getHeroes() {
    return this.http.get('http://localhost:4201/api/heroes');
  }

  //Get Hero with updated stats
  evolve(name: string, action: string){  
    return this.http.post('http://localhost:4201/api/heroes', {name: name, action: action});   
   }

}

