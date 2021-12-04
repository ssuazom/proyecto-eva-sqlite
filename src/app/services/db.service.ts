import { HttpClient } from '@angular/common/http';
import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  pokemonList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlporter: SQLitePorter) { 
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'pokemon.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
      });
    }


    //Este metodo me devuelve el estado de la base de datos
    dbState() {
      return this.isDbReady.asObservable();
    }

    //Este metodo nos entrega los objetos
    fetchPokemones(): Observable<Pokemon[]> {
      return this.pokemonList.asObservable();
    }

    //Este metodo es el nos permite ejecutar el script y cargar los datos de la base de datos.
    getFakeData() {
      this.httpClient.get(
        'assets/script.sql',{responseType: 'text'}
      ).subscribe(data =>{
        this.sqlporter.importSqlToDb(this.storage, data)
          .then(_ =>{
            this.getPokemones();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      })
    }

    //Metodo GetPokemon, lo que hace es ejecutar una consulta SQL, dicha consulta la almacena en un arreglo.
    //CRUD Obtener los datos.
    getPokemones(){
      return this.storage.executeSql('SELECT * FROM pokemon',[]).then(res => {
        let items: Pokemon[] = [];
        if(res.rows.length > 0)
        {
          for(var i=0; i < res.rows.length; i++)
          {
            items.push({
              id: res.rows.item(i).id,
              nombre: res.rows.item(i).nombre,
              tipo: res.rows.item(i).tipo,
              sexo: res.rows.item(i).sexo,
              categoria: res.rows.item(i).categoria,
              altura: res.rows.item(i).altura,
              ataque: res.rows.item(i).ataque,
              defensa: res.rows.item(i).defensa,
              ps: res.rows.item(i).ps,
              velocidad: res.rows.item(i).velocidad,
              fotografia: res.rows.item(i).fotografia
            });
          }
        }
        this.pokemonList.next(items);
      })
    }

    //CRUD Agregar objetos a la base de datos.
    addPokemon(nombre, tipo, sexo, categoria, altura, ataque, defensa, ps, velocidad, fotografia){
      let data =[nombre, tipo, sexo, categoria, altura, ataque, defensa, ps, velocidad, fotografia];
      return this.storage.executeSql('INSERT INTO pokemon (NOMBRE, TIPO, SEXO, CATEGORIA, ALTURA, ATAQUE, DEFENSA, PS, VELOCIDAD, FOTOGRAFIA) VALUES (?,?,?,?,?,?,?,?,?,?)', data)
      .then(res => {
        this.getPokemones();
      });
    }

    //Obtener un pokemon
    getPokemon(id): Promise<Pokemon> {
      return this.storage.executeSql('SELECT * FROM pokemon WHERE ID = ?', [id])
        .then(res => {
          return{
            id: res.rows.item(0).id,
            nombre: res.rows.item(0).nombre,
            tipo: res.rows.item(0).tipo,
            sexo: res.rows.item(0).sexo,
            categoria: res.rows.item(0).categoria,
            altura: res.rows.item(0).altura,
            ataque: res.rows.item(0).ataque,
            defensa: res.rows.item(0).defensa,
            ps: res.rows.item(0).ps,
            velocidad: res.rows.item(0).velocidad,
            fotografia: res.rows.item(0).fotografia
          }
        });
    }


    //CRUD actualizar
    updatePokemon(id, pokemon:Pokemon){
      let data = [pokemon.nombre, pokemon.tipo, pokemon.sexo, pokemon.categoria, pokemon.altura, pokemon.ataque, pokemon.defensa, pokemon.ps, pokemon.velocidad, pokemon.fotografia];
      return this.storage.executeSql(`UPDATE pokemon SET nombre = ?, tipo = ?, sexo = ?, categoria = ?, altura = ?, ataque = ?, defensa = ?, ps = ?, velocidad = ?, fotografia = ? WHERE id = ${id}`,data)
      .then(_ => {
        this.getPokemones();
      });
    }

    //CRUD eliminar
    deletePokemon(id) {
      return this.storage.executeSql('DELETE FROM pokemon WHERE id=?',[id])
      .then(_ => {
        this.getPokemones();
      });
    }
}