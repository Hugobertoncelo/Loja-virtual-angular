import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AcessoriosComponent } from './acessorios.component';
import { AcessorioDetalheComponent } from './acessorio-detalhe/acessorio-detalhe.component';
import { AcessoriosRoutingModule } from './acessorios-routing.module';

@NgModule({
  declarations: [AcessoriosComponent, AcessorioDetalheComponent],
  imports: [CommonModule, FormsModule, AcessoriosRoutingModule],
})
export class AcessoriosModule {}
