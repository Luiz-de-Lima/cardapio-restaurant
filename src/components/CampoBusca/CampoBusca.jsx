import React, { useState } from "react";
import estilos from "./styles.module.css";
import Image from "next/image";
import lupa from "../../../public/lupa.png";
import { buscarProduto } from "@/services/services";
// para fazer:filtrar os produtos através do botão busca e retorna a pesquisa
export const CampoBusca = ({ onBuscar, textoBuscado }) => {
  return (
    <div className={estilos.campoBusca_container}>
      <Image src={lupa} alt="lupa" />
      <input
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        value={textoBuscado}
        onChange={(e) => onBuscar(e.target.value)}
      />
    </div>
  );
};
