import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey = '08f6ebd0789e41dd8145bd0a334ebdee'
  URI: string = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

    //Vamos a pedir los datos con otro metodo
    getclima(nombreCiudad: string, codigoPais: string){
      return this.httpClient.get(`${this.URI}${nombreCiudad},${codigoPais}`);
    }
}
