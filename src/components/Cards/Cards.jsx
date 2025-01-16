import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";
export const Cards = ({
  imagem,
  subtitulo,
  textoPequeno,
  descricao,
  textoSpan,
}) => {
  return (
    <div className={estilos.cardContainer}>
      {/* Container principal */}
      <figure className={estilos.figure}>
        <Image src={imagem} alt={subtitulo} className={estilos.image} />
      </figure>
      <div className={estilos.cardContent}>
        {/* Subcontainer com subtítulo, texto pequeno e parágrafo */}
        <div className={estilos.cardDetails}>
          <h3 className={estilos.subtitle}>{subtitulo}</h3>
          <small className={estilos.smallText}>{textoPequeno}</small>
          <p className={estilos.paragraph}>{descricao}</p>
        </div>
        {/* Subcontainer com span */}
        <div className={estilos.cardFooter}>
          <span className={estilos.span}>{textoSpan}</span>
        </div>
      </div>
    </div>
  );
};
