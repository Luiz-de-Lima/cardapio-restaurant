import styles from "./page.module.css";
import { Categorias } from "@/components/Categorias/Categorias";
import { CampoBusca } from "@/components/CampoBusca/CampoBusca";
import { Cards } from "@/components/Cards/Cards";
import { Header } from "@/components/Header/Home";
import { produtos } from "../../dados/data_produtos";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Categorias />
      <CampoBusca />
      <section>
        <h2>Cardapio</h2>
        {produtos.map((produto, index) => (
          <div className={styles.home_container} key={index}>
            <Cards
              nome={produto.nome}
              descricao={produto.descricao}
              imagem={produto.imagem}
              preco={produto.preco}
              categoria={produto.categoria}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
