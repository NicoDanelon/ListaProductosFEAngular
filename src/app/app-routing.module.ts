import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProdutcoComponent } from './components/crear-produtco/crear-produtco.component';

//componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:'', component: ListarProductosComponent},
  {path:'crear-producto', component: CrearProdutcoComponent},
  {path:'editar-producto/:id', component: CrearProdutcoComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
