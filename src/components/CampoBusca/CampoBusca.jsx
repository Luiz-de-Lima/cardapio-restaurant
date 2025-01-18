import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";
import lupa from "../../../public/lupa.png";
export const CampoBusca = () => {
  return (
    <div className={estilos.campoBusca_container}>
      <Image src={lupa} alt="lupa" />
      <input type="search" name="" id="" placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
    </div>
  );
};
