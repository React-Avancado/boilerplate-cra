import { NavLink } from "react-router-dom";

import * as S from "./styles";

const Menu = () => (
  <S.Nav>
    <S.List>
      <S.Item>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </S.Item>
      <S.Item>
        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>
      </S.Item>
    </S.List>
  </S.Nav>
);

export default Menu;
