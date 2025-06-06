import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './acessorios.component';
import { AcessorioDetalheComponent } from './acessorio-detalhe/acessorio-detalhe.component';

const routes: Routes = [
  { path: '', component: AcessoriosComponent },
  { path: ':id', component: AcessorioDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoriosRoutingModule {}
