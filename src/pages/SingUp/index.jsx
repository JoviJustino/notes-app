
import { FiUser, FiMail, FiLock} from "react-icons/fi";
import {Container, Background, Form} from "./styles";
import { Button } from "../../components/Button"


import { Input } from "../../components/Input";



export function SignUp(){
  return(
  <Container>

    <Background/>
    
    <Form>
      <h1>Rocket Notes</h1>

      <p>Aplicação para gerenciar seus links úteis</p>

      <h2>Crie sua conta</h2>

    <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />
      <Input
        placeholder="E-Mail"
        type="text"
        icon={FiMail}
      />
      <Input
        placeholder="Senha"
        type="password"
        icon={FiLock}
      />
      <Button title="Entrar"/>

      <a href="#">
        Criar conta
      </a>
      </Form>

      

      
      </Container>
  )
}