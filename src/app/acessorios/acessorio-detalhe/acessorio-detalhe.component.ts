import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IAcessorio } from '../../acessorios';
import { IProdutoCarrinho } from 'src/app/produtos';
import { AcessoriosService } from '../../acessorios.service';

@Component({
  selector: 'app-acessorio-detalhe',
  templateUrl: './acessorio-detalhe.component.html',
  styleUrls: ['./acessorio-detalhe.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AcessorioDetalheComponent implements OnInit {
  produto: IAcessorio | undefined;
  quantidade = 1;

  constructor(
    private acessoriosService: AcessoriosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.acessoriosService.getOne(produtoId);
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  aumentarQuantidade() {
    if (this.produto && this.quantidade < this.produto.quantidadeEstoque) {
      this.quantidade++;
    }
  }

  validarQuantidade() {
    if (this.quantidade < 1) {
      this.quantidade = 1;
    }
    if (this.produto && this.quantidade > this.produto.quantidadeEstoque) {
      this.quantidade = this.produto.quantidadeEstoque;
    }
  }

  adicionarAoCarrinho() {
    if (!this.produto) return;

    const produtoCarrinho: IProdutoCarrinho = {
      id: this.produto.id,
      descricao: this.produto.descricao,
      preco: this.produto.preco,
      descricaoPreco: `R$ ${this.produto.preco.toFixed(2)}`,
      imagem: this.produto.imagem,
      quantidadeEstoque: this.produto.quantidadeEstoque,
      quantidade: this.quantidade,
    };

    this.carrinhoService.adicionarAoCarrinho(produtoCarrinho);
    this.notificacaoService.notificar('Produto adicionado ao carrinho!');
  }
}
