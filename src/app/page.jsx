"use client";
import styles from "./page.module.css";
import { Categorias } from "@/components/Categorias/Categorias";
import { CampoBusca } from "@/components/CampoBusca/CampoBusca";
import { Cards } from "@/components/Cards/Cards";
import { Header } from "@/components/Header/Home";

import { produtosEntradas } from "@/services/services";
import { filtrarProdutos } from "@/services/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtoInicial, setProdutoInicial] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [botaoClicado, setBotaoClicado] = useState(null);

  useEffect(() => {
    setProdutoInicial(produtosEntradas);
  }, []);
  const handleFiltro = (categoria) => {
    setItemSelecionado(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <>
      <main className={styles.main}>
        <Header />

        <Categorias handleClick={handleFiltro} botaoClicado={botaoClicado} />
        <CampoBusca />
        <h2>Cardapio</h2>
        <section className={styles.section_card}>
          {itemSelecionado
            ? itemSelecionado.map((produto) => (
                <div className={styles.home_container} key={produto.id}>
                  <Cards
                    nome={produto.nome}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                    preco={produto.preco}
                    categoria={produto.categoria}
                  />
                </div>
              ))
            : produtoInicial.map((produto) => (
                <div className={styles.home_container} key={produto.id}>
                  <Cards
                    nome={produto.nome}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                    preco={produto.preco}
                    categoria={produto.categoria}
                  />
                </div>
              ))}
        </section>
      </main>
    </>
  );
}
