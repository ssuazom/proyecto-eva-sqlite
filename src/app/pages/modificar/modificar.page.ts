import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  pageTitle = "Modificar PK";

  editForm : FormGroup;
  id: any;
  
  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getPokemon(this.id).then(res => {
      this.editForm.setValue({
        id: res['id'],
        nombre: res['nombre'],
        tipo: res['tipo'],
        sexo: res['sexo'],
        categoria: res['categoria'],
        altura: res['altura'],
        ataque: res['ataque'],
        defensa: res['defensa'],
        ps: res['ps'],
        velocidad: res['velocidad'],
        fotografia: res['fotografia']
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
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
    });
  }
  
  updatePokemon(){
    this.db.updatePokemon(this.id, this.editForm.value).then((res => {
      console.log(res)
      this.router.navigate(['/pokemon']);
    }));
  }

}
