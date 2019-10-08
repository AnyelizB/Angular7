"use strict";
/*function saludar(nombre:string){

    console.log("Hola "+ nombre.toUpperCase());

}
var vistovis = {
    nombre: "Macarena"
};

saludar(vistovis.nombre); */
/*
let mensaje = "Hola";

if(true){
    let mensaje = "adios";
}
console.log(mensaje) */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const OPCIONES = "todas";
/*
let nombre:string = "Karla";
let numero:number = 123;
let boolean: boolean = true;
let hoy: Date = new Date();
hoy = new Date('2020-10-21');
let cualquiera: any;
cualquiera = nombre;
cualquiera = numero;

let spiderman = {
 nombre: "PETER",
 edad: 20
}

spiderman = {
    nombre: "Juan",
    edad: 230
}
console.log(hoy); */
/**
 * DECORADORES
 */
function consola(constructor) {
    console.log(constructor);
}
var Marcador = /** @class */ (function () {
    function Marcador(nombre) {
        this.nombre = nombre;
    }
    Marcador = __decorate([
        consola
    ], Marcador);
    return Marcador;
}());
