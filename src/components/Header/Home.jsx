import React from "react";
import estilos from "./styles.module.css";
export const Header = () => {
  return (
    <header className={estilos.header}>
      <div className={estilos.container_home}>
        <h1>RESTAURANT</h1>
        <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
      </div>
    </header>
  );
};
