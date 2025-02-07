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
  const [itemFiltrado, setItemfiltrado] = useState("");

  const handleProdutoFiltrado = (itemDigitado) => {
    if (itemDigitado != 0) {
      setItemfiltrado(itemDigitado);
      itemFiltrado.length >= 2 &&
        setProdutoInicial(buscarProduto(itemFiltrado));
    } else {
      setItemfiltrado("");
      setProdutoInicial(produtosEntradas);
    }
  };
  const handleFiltro = (categoria) => {
    setProdutoInicial(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <>
      <Header />

      <main className={styles.main}>
        <Categorias handleClick={handleFiltro} botaoClicado={botaoClicado} />
        <CampoBusca
          onBuscar={handleProdutoFiltrado}
          textoBuscado={itemFiltrado}
        />
        <h2>Cardapio</h2>
        <section className={styles.section_card}>
          {produtoInicial.map((produto) => (
            <div className={styles.home_container} key={produto.id}>
              <Cards produto={produto} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
