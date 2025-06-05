export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque: number;
  imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos: IProduto[] = [
  {
    id: 1,
    descricao: 'Vestido Laranja',
    preco: 199.0,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/vestido-laranja.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 2,
    descricao: 'Conjunto Bege',
    preco: 220.0,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-bege.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 3,
    descricao: 'Macaquinho',
    preco: 149.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/macaquinho.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 4,
    descricao: 'Conjunto Azul',
    preco: 599.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-azul.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 5,
    descricao: 'Vestido de Festa',
    preco: 299.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/vestido-festa.jpeg',
    quantidadeEstoque: 10,
  },
  {
    id: 6,
    descricao: 'Conjunto Completo',
    preco: 399.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-completo.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 7,
    descricao: 'Conjuntinho',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-short.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 8,
    descricao: 'Conjunto Branco',
    preco: 149.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-branco.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 9,
    descricao: 'Conjunto Rose',
    preco: 170,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-rose.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 10,
    descricao: 'Conjunto Preto',
    preco: 180,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/conjunto-preto.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 11,
    descricao: 'Saia e Blusa',
    preco: 250,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/saia-blusa.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 12,
    descricao: 'Vestido Colorido',
    preco: 200,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/vestido-colorido.jpeg',
    quantidadeEstoque: 10,
  },
  {
    id: 13,
    descricao: 'Macaquinho Vinho',
    preco: 200,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/macaquinho-2.avif',
    quantidadeEstoque: 10,
  },
  {
    id: 14,
    descricao: 'Vestido Plus Size',
    preco: 180,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/vestido-plus.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 15,
    descricao: 'Macacão Vinho',
    preco: 259.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/macacao.jpg',
    quantidadeEstoque: 10,
  },
];
