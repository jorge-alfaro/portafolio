import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  loading = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();

   }



   private cargarProductos(){

    return new Promise ((resolve, reject) => {

           this.http.get('https://angular-p-one.firebaseio.com/productos_idx.json')
           .subscribe( (resp: Producto[]) =>{

            this.productos = resp;
             this.loading = false;
             resolve();
           });

    })
   }


   getProductos (id: string ) {

   return this.http.get(`https://angular-p-one.firebaseio.com/productos/${id}.json`)


   }

   buscarProducto (termino: string){

    if ( this.productos.length === 0){

      this.cargarProductos().then ( ()=> {
          //ejecutar despues de tener los productos
          //Aplicar filtro
          this.filtrarProductos(termino);
        });

      }else {
        //aplicar el filtro
        this.filtrarProductos(termino);

    }



   }

   private filtrarProductos ( termino: string){
    //console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {

      const titlelower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino) >= 0 || titlelower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }


    });

   }


}

