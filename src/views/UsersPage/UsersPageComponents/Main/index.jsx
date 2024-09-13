import { useState } from "react";
import Main from "../../../../components/specific/Main";
import Header from "../Header";
import Sections from "../Sections";

export default function UsersPageMain() {
  const [active, setActive] = useState("Estudantes");

  return (
    <Main key="main">
      <Header key="header" active={active} setActive={setActive} />
      <Sections key="sections" active={active} setActive={setActive} />
    </Main>
  );
}
