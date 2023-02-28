import {Container, Form, Avatar} from "./styles"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"


export function Profile(){
  return(
    <Container>
        <header>
          <a href="/">
            <FiArrowLeft/>
          </a>
        </header>

        <Form>
          <Avatar>
            <img src="https://github.com/jovijustino.png"
             alt="Foto do usuário" />

             <label htmlFor="avatar"> 
             
              <FiCamera/>
                <input
                  id="avatar"
                  type="file"
                />
             </label>
          </Avatar>
          <Input 
            Placeholder="Nome"
            type="text"
            icon={FiUser}
          />
          <Input 
            Placeholder="E-Mail"
            type="text"
            icon={FiMail}
          />
          <Input 
            Placeholder="Senha atual"
            type="password"
            icon={FiLock}
          />
          <Input 
            Placeholder="Nova senha "
            type="password"
            icon={FiLock}
          />

          <Button title="Salvar"/>
        </Form>
    </Container>
  )
}