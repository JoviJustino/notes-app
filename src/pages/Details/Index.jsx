import "./styles.js";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() {
  // Conteúdo que será apresentado na tela
  return (
    <Container>
      <Header />
      <Button title="Entrar" loading />
    </Container>
  );
}
