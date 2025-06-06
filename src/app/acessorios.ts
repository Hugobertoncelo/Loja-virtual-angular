export interface IAcessorio {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
  quantidadeEstoque: number;
}

export interface IAcessorioCarrinho extends IAcessorio {
  quantidade: number;
}

export const ACESSORIOS: IAcessorio[] = [
  {
    id: 18,
    descricao: 'Bolsa de Couro',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/bolsa-coro.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 20,
    descricao: 'Colar de Pérolas',
    preco: 289.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/colar.webp',
    quantidadeEstoque: 15,
  },
];
