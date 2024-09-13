import Aside from './UsersPageComponents/Aside';
import UsersPageMain from './UsersPageComponents/Main';
// import Main from "../../components/specific/Main";
// import Header from "./UsersPageComponents/Header";
// import MainContent from "../../components/specific/MainContent";

export default function UsersPage() {
  return (
    <>
      <Aside key={'Aside'} />
      <UsersPageMain key="main" />
      {/* <Main key={"Main"}>
        <Header key={"Header"} />
        <MainContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ipsa
          eius, obcaecati at vitae excepturi eveniet consectetur, ut harum
          veniam ullam deserunt dolorem? Fugit reprehenderit necessitatibus
          minus exercitationem aliquam aliquid.
        </MainContent>
      </Main> */}
    </>
  );
}
