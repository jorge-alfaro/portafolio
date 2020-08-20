import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portaforlio',
  templateUrl: './portaforlio.component.html',
  styleUrls: ['./portaforlio.component.css']
})
export class PortaforlioComponent implements OnInit {

  constructor( public productosService: ProductosService) { }

  ngOnInit() {
  }

}
