import React from "react";
import estilos from "./styles.module.css";
import Image from "next/image";
export const CampoBusca = () => {
  return (
    <div className={estilos.campoBusca_container}>
      <Image />
      <input type="search" name="" id="" />
    </div>
  );
};
