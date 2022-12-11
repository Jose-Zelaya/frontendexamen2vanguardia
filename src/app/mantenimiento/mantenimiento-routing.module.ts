import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component'; 
import { ProductosComponent } from './productos/productos.component';
const routes: Routes = [ 
  {path:'', 
  children: [ 
    {path: 'factura',component:FacturaComponent}, 
    {path: 'detallefactura',component:DetalleFacturaComponent}, 
    {path: 'productos',component:ProductosComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
