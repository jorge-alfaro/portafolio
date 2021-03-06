import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(params =>{

      // console.log(params['id']);
      this.productoService.getProductos(params['id'])
          .subscribe( (producto: productoDescripcion) => {

            this.id =params['id'];
            this.producto = producto;
            //console.log(producto);

          });

    });

  }

}
