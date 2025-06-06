import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  mensagemCompra = '';

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar() {
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = [];
    this.calculaTotal();

    this.mensagemCompra = 'Parabéns, você finalizou a sua compra!';

    setTimeout(() => {
      this.mensagemCompra = '';
      this.router.navigate(['produtos']);
    }, 3000);
  }
}
