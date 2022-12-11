import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { FacturaComponent } from './factura/factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    FacturaComponent,
    DetalleFacturaComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
