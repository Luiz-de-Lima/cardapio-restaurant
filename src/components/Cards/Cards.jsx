import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";
export const Cards = ({ id, nome, categoria, preco, descricao, imagem }) => {
  return (
    <div className={estilos.cardContainer}>
      {/* Container principal */}
      <figure className={estilos.figure}>
        <Image src={imagem} alt={nome} className={estilos.image} />
      </figure>
      <div className={estilos.cardContent}>
        {/* Subcontainer com subtítulo, texto pequeno e parágrafo */}
        <div className={estilos.cardDetails}>
          <h3 className={estilos.subtitle}>{nome}</h3>
          <small className={estilos.smallText}>{categoria}</small>
          <p className={estilos.paragraph}>{descricao}</p>
        </div>
        {/* Subcontainer com span */}
        <div className={estilos.cardFooter}>
          <span className={estilos.span}>{preco}</span>
        </div>
      </div>
    </div>
  );
};
