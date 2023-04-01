import { IProduct } from "./main.js"

export const productsList: IProduct[] = [
    {
      category: 'Comidas',
      image: './assets/images/arroz-salsicha.png',
      name: 'Arroz com salsicha',
      description: 'PF arroz com salsicha',
      was_discount: true,
      discount: 15.49,
      price: 11.99,
    },
    {
      category: 'NFTs',
      image: './assets/images/lobo.png',
      name: 'NFT Lobo',
      description: 'NFT de um lobo usando óculos de sol',
      was_discount: false,
      price: 1368.92,
    },
    {
      category: 'Comidas',
      image: './assets/images/hamburguer.png',
      name: 'Hamburguer',
      description: 'Hamburguer caseiro',
      was_discount: false,
      price: 16.99,
    },
    {
      category: 'Comidas',
      image: './assets/images/pizza.png',
      name: 'Pizza Margherita',
      description: 'Pizza com molho de tomate, mozzarella e manjericão',
      was_discount: true,
      discount: 111.49,
      price: 72.99,
    },
    {
      category: 'NFTs',
      image: './assets/images/gato.jpeg',
      name: 'NFT Gato',
      description: 'NFT de um gato sentado e sorrindo',
      was_discount: false,
      price: 987.34,
    },
    {
      category: 'PCs',
      image: './assets/images/pc-gamer.jpg',
      name: 'PC gamer',
      description: 'Computador 3000 Quad Core I3 10100F',
      was_discount: true,
      price: 5199.98,
      discount: 4899.99,
    },
    {
      category: 'Headset',
      image:
        'https://cdn.awsli.com.br/600x700/2150/2150819/produto/130004849/cd1d076ca1.jpg',
      name: 'Headset Gamer',
      description: 'Headset Gamer 7.1 Mic PC Console e Celular Haiz K2',
      was_discount: false,
      price: 678.33,
    }
]