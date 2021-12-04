import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  pageTitle:String;
  pokemon = null;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params =>{
      this.pokemon = JSON.parse(params.pokemon);
    });
   }

  ngOnInit() {
    console.log(this.pokemon);
    this.pageTitle = this.pokemon.name;
  }
}
