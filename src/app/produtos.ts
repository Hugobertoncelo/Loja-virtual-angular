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
    descricao: 'Conjuntinho',
    preco: 99.9,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/blusa.png',
    quantidadeEstoque: 10,
  },
  {
    id: 2,
    descricao: 'Vestidinho',
    preco: 120.0,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/vestido.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 3,
    descricao: 'Shortinho Rosa',
    preco: 100,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/short.jpeg',
    quantidadeEstoque: 10,
  },
  {
    id: 4,
    descricao: 'Conjunto Beje',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/conjunto2.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 5,
    descricao: 'Body de Manga',
    preco: 99.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/body.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 6,
    descricao: 'Conjunto Social',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/conjunto.jpeg',
    quantidadeEstoque: 10,
  },
  {
    id: 7,
    descricao: 'Conjuntinho',
    preco: 199.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/blusa2.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 8,
    descricao: 'Vestido Floral',
    preco: 109.99,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/vestido2.webp',
    quantidadeEstoque: 10,
  },
  {
    id: 9,
    descricao: 'Vestido de Festa',
    preco: 270,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/festa.png',
    quantidadeEstoque: 10,
  },
  {
    id: 10,
    descricao: 'Blusa Social',
    preco: 180,
    descricaoPreco: 'À vista no PIX',
    imagem: './assets/produtos/blusa3.avif',
    quantidadeEstoque: 10,
  },
];
