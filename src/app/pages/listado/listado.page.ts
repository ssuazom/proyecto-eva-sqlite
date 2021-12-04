import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListadoService } from '../../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  pokemons: any[] = [];

  pageTitle = "PokeList";

  constructor(
    private listadoService: ListadoService,
    public navController: NavController,) { 
      this.listadoService.getPokemons();
    }

  ngOnInit(): void {
    this.listadoService.getPokemons()
      .subscribe((response: any) => {

        response.results.forEach(result => {
          this.listadoService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        })
      })
  };

  goToDetallePokemon(pokemon: any){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        pokemon: JSON.stringify(pokemon)
      }
    };
    this.navController.navigateForward(['detalle/'],navigationExtras);
  }
}
