import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  /* Esse sinal de maior é para garantir que estou referenciando a img que está dentro do Profile e não qualquer outra imagem */
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    /* Não precisou do sinal de maior pois já está especifico que é o span dentro da div que está dentro do profile */
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  
`;

export const Logout = styled.button`
border: none ;
background:none ;

> svg{
  color: ${({theme}) => theme.COLORS.GRAY_100};

  font-size: 35px ;
}
`