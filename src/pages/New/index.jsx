import {Container, Form} from "./styles";

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {NoteItem} from "../../components/NoteItem"
import {Section} from "../../components/Section"
import {Button} from "../../components/Button"





export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input
            placeholder="Título"
          />
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem  value="https://google.com"/>
            <NoteItem  
            isNew
            placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">

            <div className="tags">
              <NoteItem  value="React"/>
              <NoteItem placeholder="Nova tag" />
            </div>
          
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
      
    </Container>
  )
}