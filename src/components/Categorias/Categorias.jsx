"use client";
import Image from "next/image";
import React, { useState } from "react";
import entrada from "../../../public/entrada.png";
import massa from "../../../public/massa.png";
import carne from "../../../public/carne.png";
import bebidas from "../../../public/bebidas.png";
import salada from "../../../public/salada.png";
import sobremesa from "../../../public/sobremesa.png";
import estilos from "./styles.module.css";

export const Categorias = ({ handleClick, botaoClicado }) => {
  return (
    <section className={estilos.container_card}>
      <button
        className={estilos.button}
        onClick={() => handleClick("Entradas")}
      >
        <Image src={entrada} alt="entradas" />
        <span>Entradas</span>
      </button>

      <button
        className={
          botaoClicado === "Massas" ? estilos.acenderbtn : estilos.button
        }
        onClick={() => handleClick("Massas")}
      >
        <Image src={massa} alt="massas" />
        <span>Massas</span>
      </button>
      <button className={estilos.button} onClick={() => handleClick("Carnes")}>
        <Image src={carne} alt="carnes" />
        <span>Carnes</span>
      </button>
      <button className={estilos.button} onClick={() => handleClick("Bebidas")}>
        <Image src={bebidas} alt="bebidas" />
        <span>Bebidas</span>
      </button>
      <button className={estilos.button} onClick={() => handleClick("Saladas")}>
        <Image src={salada} alt="saladas" />
        <span>Saladas</span>
      </button>
      <button
        className={estilos.button}
        onClick={() => handleClick("Sobremesas")}
      >
        <Image src={sobremesa} alt="sobremesas" />
        <span>Sobremesas</span>
      </button>
    </section>
  );
};
