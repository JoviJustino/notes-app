import { Container} from "./styles";

import { Header } from "../../components/Header";
import { Section} from "../../components/Section";
import { Links } from "../../components/Section/styles.js";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";


export function Details() {
  // Conteúdo que será apresentado na tela
  return (
    <Container>
      <Header />
      <Section title="Links úteis">

      <Links>
        <li><a href="https://github.com/JoviJustino" target="blank">https://github.com/JoviJustino</a></li>
        <li><a href="https://github.com/JoviJustino" target="blank">https://github.com/JoviJustino</a></li>
      </Links>
      </Section>

      <Section title="Marcadores">


      <Tag title="express"/>
      <Tag title="Nodejs"/>

      </Section>

      <Button title="Entrar" loading />
    </Container>
  );
}
