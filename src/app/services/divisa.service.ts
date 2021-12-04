import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  URI: string = '';
  constructor(private httpCliente: HttpClient) { 
    this.URI = `https://mindicador.cl/api/`
  }

  getMoneda(){
    console.log(this.URI)
    return this.httpCliente.get(`${this.URI}`)
  }
}
