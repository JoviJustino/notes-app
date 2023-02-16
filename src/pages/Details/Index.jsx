import { Container} from "./styles";

import { Header } from "../../components/Header";
import { Section} from "../../components/Section";
import { Links } from "../../components/Section/styles.js";
import { Button } from "../../components/Button";


export function Details() {
  // Conteúdo que será apresentado na tela
  return (
    <Container>
      <Header />
      <Section title="Links úteis">

      <Links>
        <li><a href="https://github.com/JoviJustino" target="blank">Meu GitHub</a></li>
        <li><a href="https://github.com/JoviJustino" target="blank">Meu GitHub</a></li>
      </Links>
      </Section>

      <Button title="Entrar" loading />
    </Container>
  );
}
