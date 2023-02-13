import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/JoviJustino.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>João Victor Justino</strong>
        </div>
      </Profile>
    </Container>
  );
}
