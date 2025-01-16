import Image from "next/image";
import React from "react";
import entrada from "../../../public/entrada.png";
import massa from "../../../public/massa.png";
import carne from "../../../public/carne.png";
import bebidas from "../../../public/bebidas.png";
import salada from "../../../public/salada.png";
import sobremesa from "../../../public/sobremesa.png";

export const Categorias = () => {
  return (
    <section>
      <button>
        <Image src={entrada} alt="entrada" />
        <span>Entradas</span>
      </button>
      <button>
        <Image src={massa} alt="massas" />
        <span>Massas</span>
      </button>
      <button>
        <Image src={carne} alt="carnes" />
        <span>Carnes</span>
      </button>
      <button>
        <Image src={bebidas} alt="bebidas" />
        <span>Bebidas</span>
      </button>
      <button>
        <Image src={salada} alt="saladas" />
        <span>Saladas</span>
      </button>
      <button>
        <Image src={sobremesa} alt="sobremesas" />
        <span>Sobremesas</span>
      </button>
    </section>
  );
};
