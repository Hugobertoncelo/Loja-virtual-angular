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
    id: 1,
    descricao: 'Bolsa de Couro',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/bolsa-coro.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 2,
    descricao: 'Colar de Pérolas',
    preco: 289.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/colar.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 3,
    descricao: 'Pulseira',
    preco: 100,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/pulseira.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 4,
    descricao: 'Relógio de Pulso',
    preco: 189.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/relogio.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 5,
    descricao: 'Piranha de Cabelo',
    preco: 29.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/pregador.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 6,
    descricao: 'Anel de Pedra',
    preco: 189.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/anel.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 7,
    descricao: 'Tornozeleira',
    preco: 109.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/tornozeleira.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 8,
    descricao: 'Gargantilha',
    preco: 199.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/gargantilha.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 9,
    descricao: 'Tiara de Pérolas',
    preco: 119.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/tiara.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 10,
    descricao: 'Brinco',
    preco: 89.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/brinco.jpg',
    quantidadeEstoque: 15,
  },
];
