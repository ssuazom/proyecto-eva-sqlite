import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-climapokemon',
  templateUrl: './climapokemon.page.html',
  styleUrls: ['./climapokemon.page.scss'],
})
export class ClimapokemonPage implements OnInit {

  pageTitle = "PokeClima";

  /** Creamos una propiedad para almacenar los datos temporalmente **/
  clima;

  constructor(private climaService: ClimaService ) { }

  ngOnInit() {
  }

  getClima(nombreCiudad: string, codigoPais: string) {
    this.climaService.getclima(nombreCiudad, codigoPais)
      .subscribe(
        res => {
          console.log(res);
          this.clima = res
        },
        err => console.log(err)
  )
  }

  /** Metodo que ejecuta el formulario **/
  submitLocation(nombreCiudad: HTMLInputElement, codigoPais: HTMLInputElement){
    if (nombreCiudad.value && codigoPais.value) {
      this.getClima(nombreCiudad.value, codigoPais.value)

      nombreCiudad.value = '';
      codigoPais.value = '';
      } else {
        alert('Porfavor insertar valores')
      }
    nombreCiudad.focus();
    return false;
  }

}
