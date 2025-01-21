import { produtos } from '../../dados/data_produtos.js'

produtos.filter((produto) => produto.categoria === "Espaguete")

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
};
export const produtosEntradas = produtos.filter((item) => item.categoria === 'Entradas')