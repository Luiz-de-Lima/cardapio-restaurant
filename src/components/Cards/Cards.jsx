import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";

export const Cards = ({ id, nome, categoria, preco, descricao, imagem }) => {
  const formatMoeda = (moeda) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(moeda);
  };
  return (
    <div className={estilos.cardContainer} id={id}>
      <div className={estilos.card_item}>
        <figure className={estilos.figure}>
          <Image src={imagem} alt={nome} className={estilos.image} />
        </figure>
        <div className={estilos.cardContent}>
          <h3 className={estilos.subtitle}>{nome}</h3>
          <small className={estilos.smallText}>{categoria}</small>
          <p className={estilos.paragraph}>{descricao}</p>

          <span className={estilos.span}>{formatMoeda(preco)}</span>
        </div>
      </div>
    </div>
  );
};
