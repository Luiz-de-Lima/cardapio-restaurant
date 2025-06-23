"use client";
import styles from "./page.module.css";
import { Categorias } from "@/components/Categorias/Categorias";
import { CampoBusca } from "@/components/CampoBusca/CampoBusca";
import { Cards } from "@/components/Cards/Cards";
import { Header } from "@/components/Header/Home";

import {
  produtosEntradas,
  filtrarProdutos,
  buscarProduto,
} from "@/services/services";

import { useState } from "react";

export default function Home() {
  const [produtoInicial, setProdutoInicial] = useState(produtosEntradas);
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");

  const handleProdutoFiltrado = (itemDigitado) => {
    if (itemDigitado != 0) {
      setTermoBusca(itemDigitado);

      termoBusca.length >= 2 && setProdutoInicial(buscarProduto(termoBusca));
    } else {
      setTermoBusca("");
      setProdutoInicial(produtosEntradas);
    }
  };
  const handleFiltro = (categoria) => {
    setProdutoInicial(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };
  const isSingleItem = produtoInicial.length === 1;
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Categorias handleClick={handleFiltro} botaoClicado={botaoClicado} />
        <CampoBusca
          onBuscar={handleProdutoFiltrado}
          textoBuscado={termoBusca}
        />
        <h2>Cardapio</h2>
        <section
          className={`${
            isSingleItem ? styles.singleItem : styles.section_card_container
          }`}
        >
          {produtoInicial.map((produto) => (
            <div
              className={`${isSingleItem ? styles.singleItem : styles.topRow}`}
              key={produto.id}
            >
              <Cards produto={produto} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
