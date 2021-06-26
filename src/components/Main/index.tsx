import Menu from "components/Menu";
import React from "react";

import * as S from "./styles";

const Main = ({ description = "CRA, TypeScript e Styled Components" }) => (
  <S.Wrapper>
    <S.Logo
      src={`${process.env.PUBLIC_URL}/logo.svg`}
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Description>{description}</S.Description>
    <S.Illustration
      src={`${process.env.PUBLIC_URL}/hero-illustration.svg`}
      alt="Um desenvolvedor de frente para uma tela com código."
    />

    <Menu />
  </S.Wrapper>
);

export default Main;
