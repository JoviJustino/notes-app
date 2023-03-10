import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0 ;
  padding: 0;

  box-sizing:border-box ;

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
    color: ${({ theme }) => theme.COLORS.WHITE} ;

    /* Propriedade para deixar as fontes mais suaves: */
    -webkit-font-smoothing: antialiased;
  }

  body, input,button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px ;
    outline: none ;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button::hover, a:hover {
    /* Para escurecer um pouco os botôes e links: */
  filter:brightness(0.9) ;
  }







}
`;
