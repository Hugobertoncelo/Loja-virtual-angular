import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {
    path: 'acessorios',
    loadChildren: () =>
      import('./acessorios/acessorios.module').then((m) => m.AcessoriosModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contato/contato.module').then((m) => m.ContatoModule),
  },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: '**', component: NaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
