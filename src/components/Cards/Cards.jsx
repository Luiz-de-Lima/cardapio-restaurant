import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";

export const Cards = ({ produto }) => {
  const formatMoeda = (moeda) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(moeda);
  };
  return (
    <div className={estilos.card_item} key={produto.id}>
      <figure className={estilos.figure}>
        <Image
          src={produto.imagem}
          alt={produto.nome}
          className={estilos.image}
        />
      </figure>
      <div className={estilos.cardContent}>
        <h3 className={estilos.subtitle}>{produto.nome}</h3>
        <small className={estilos.smallText}>{produto.categoria}</small>
        <p className={estilos.paragraph}>{produto.descricao}</p>

        <span className={estilos.span}>{formatMoeda(produto.preco)}</span>
      </div>
    </div>
  );
};
