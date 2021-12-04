import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pageTitle = "Mantenedor PK";

  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) { }

  //Lo que hace esto es preguntar si hay pokemones, los trae y los agrega a un listado, ademas armara una estructura tipo formulario.
  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res)
      {
        this.db.fetchPokemones().subscribe(item => {
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
      nombre: [''],
      tipo: [''],
      sexo: [''],
      categoria: [''],
      altura: [''],
      ataque: [''],
      defensa: [''],
      ps: [''],
      velocidad: [''],
      fotografia: ['']
    })
  }

  //Metodo
  storeData(){
    this.db.addPokemon(
      this.mainForm.value.nombre,
      this.mainForm.value.tipo,
      this.mainForm.value.sexo,
      this.mainForm.value.categoria,
      this.mainForm.value.altura,
      this.mainForm.value.ataque,
      this.mainForm.value.defensa,
      this.mainForm.value.ps,
      this.mainForm.value.velocidad,
      this.mainForm.value.fotografia
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  //Metodo
  deletePokemon(id){
    this.db.deletePokemon(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Pokemon Eliminado',
        duration: 3000
      });
      toast.present()
    })
  }
}
