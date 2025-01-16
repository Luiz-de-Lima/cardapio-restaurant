import Image from "next/image";
import styles from "./page.module.css";
import { Categorias } from "@/components/Categorias/Categorias";
import { CampoBusca } from "@/components/CampoBusca/CampoBusca";
import { Cards } from "@/components/Cards/Cards";

export default function Home() {
  return (
    <main className={styles.main}>
      <Home />
      <Categorias />
      <CampoBusca />
      <section>
        <h2>Cardapio</h2>
        <div className={styles.home_container}>
          <Cards />
        </div>
      </section>
    </main>
  );
}
