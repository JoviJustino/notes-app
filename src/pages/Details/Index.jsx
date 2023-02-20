import { Container, Links, Content} from "./styles";

import { Header } from "../../components/Header";
import { Section} from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";


export function Details() {
  // Conteúdo que será apresentado na tela
  return (
  <Container>
      <Header />

    <main>
      <Content>

        <ButtonText title="Excluir nota "/>
          <h1>
            Introdução ao React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
             nihil? Ducimus expedita maiores aliquam commodi iste placeat 
             adipisci molestiae earum, ullam, libero ea error eligendi 
             praesentium unde dolorum. Ut, voluptatum!
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             Rerum fugiat mollitia officia, voluptates quam, doloremque
              provident alias inventore incidunt debitis sed, placeat 
              sint ut ex! Recusandae eligendi fugiat vero placeat.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             Rerum fugiat mollitia officia, voluptates quam, doloremque
              provident alias inventore incidunt debitis sed, placeat 
              sint ut ex! Recusandae eligendi fugiat vero placeat.</p>
             
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

        <Button title="Voltar"  />

      </Content>
    </main>


  </Container>
    
  );
}

