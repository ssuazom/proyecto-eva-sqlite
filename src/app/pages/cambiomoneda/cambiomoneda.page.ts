import { Component, OnInit } from '@angular/core';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-cambiomoneda',
  templateUrl: './cambiomoneda.page.html',
  styleUrls: ['./cambiomoneda.page.scss'],
})
export class CambiomonedaPage implements OnInit {

  tipo_moneda;
  pageTitle = "PokeCambio";
  divisa;
  uf;

  toVal1:any;
  fromVal1:any;
  toVal2:any;
  fromVal2: any;

  dolar:any;
  euro:any;

  constructor(private divisaServicio: DivisaService) { 
  }
  onPeso(event){
    console.log(event.target.value);
    this.fromVal1=(event.target.value);
    this.dePeso();
  }
  onDolar(event){
    console.log(event.target.value);
    this.toVal1=(event.target.value);
    this.aDolar();
  }

  onPeso2(event){
    console.log(event.target.value);
    this.fromVal2=(event.target.value);
    this.dePeso2();
  }
  onEuro(event){
    console.log(event.target.value);
    this.toVal2=(event.target.value);
    this.aEuro();
  }

  

  ngOnInit() {
    this.cambioMoneda();
  }

  cambioMoneda(){
  this.divisaServicio.getMoneda()
  .subscribe(
    respuesta => {
      this.divisa=respuesta
      this.dolar = this.divisa.dolar.valor
      this.euro  = this.divisa.euro.valor
      console.log(this.divisa);
      console.log(this.dolar);
      console.log(this.euro);
    },
    err => console.log(err)
  ) 
 }

 dePeso(){
   this.toVal1 = Math.pow(this.fromVal1 / this.dolar,2);
 }

 aDolar(){
  this.fromVal1 = this.toVal1 * this.dolar;
 }

 dePeso2(){
  this.toVal2 = this.fromVal2 / this.euro;
 }
 aEuro(){
  this.fromVal2 = this.toVal2 * this.euro;
 
 }
 limpiarPesoUsd(){
  this.fromVal1=0;
  this.toVal1=0;
 }

 limpiarPesoEuro(){
  this.fromVal2=0;
  this.toVal2=0;
 }

}
