import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrap>
      <Div>
        <A>Trabajá con nosotros</A>
        <A>Términos y condiciones</A>
        <A>Cómo cuidamos tu privacidad</A>
        <A>Información al usuario financiero</A>
        <A>Ayuda</A>
        <A>Avisos legales</A>
      </Div>
      <div>
        <Disclaimer>Copyright © 1999-2021 Empresa genérica.</Disclaimer>
        <Disclaimer>Av. Siempre Viva 123, Springfield.</Disclaimer>
      </div>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  background-color: #ededed;
  border-top: 1px solid #e7e7e7;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;

const Div = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const A = styled.button`
  font-size: 0.8rem;
  margin-right: 1rem;
  outline: none;
  :hover {
    font-weight: 600;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.8rem;
  color: grey;
`;
