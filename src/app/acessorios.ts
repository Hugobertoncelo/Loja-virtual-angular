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
    descricao: 'Kit De Acessórios',
    preco: 99.99,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/kit.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 2,
    descricao: 'Laço de Cabelo',
    preco: 29.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/laco.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 3,
    descricao: 'Kit Arco-Íris',
    preco: 100,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/kit2.jpg',
    quantidadeEstoque: 15,
  },
  {
    id: 4,
    descricao: 'Kit de Mordedor',
    preco: 109.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/kit3.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 5,
    descricao: 'Tablet',
    preco: 129.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/tablet.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 6,
    descricao: 'Tênis com Luzes',
    preco: 89.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/tenis.jpg',
    quantidadeEstoque: 15,
  },
  {
    id: 7,
    descricao: 'Tênis de Unicórnio',
    preco: 129.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/tenis2.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 8,
    descricao: 'Chinelo do Sônic',
    preco: 29.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/chinelo.webp',
    quantidadeEstoque: 15,
  },
  {
    id: 9,
    descricao: 'Sandália da Raposa',
    preco: 39.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/chinelo2.jpeg',
    quantidadeEstoque: 15,
  },
  {
    id: 10,
    descricao: 'Carrinho de Compras',
    preco: 99.9,
    descricaoPreco: 'À vista no PIX',
    imagem: 'assets/acessorios/carrinho.webp',
    quantidadeEstoque: 15,
  },
];
