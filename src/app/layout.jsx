import "./globals.css";

export const metadata = {
  title: "Cardapio de Restaurante",
  description: "spa de um cardapio de restaurante ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
