import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemon
  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
  }

  //Get Mas Pokemones
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
