import MainContent from "../../../../components/specific/MainContent";
import CoordenadoresSection from "./Coordenadores";
import EscolasSection from "./Escolas";
import EstudantesSection from "./Estudantes";
import GestoresSection from "./Gestores";
import ProfessoresSection from "./Professores";

const sections = [
  ["Estudantes", <EstudantesSection key="Estudantes" />],
  ["Professores", <ProfessoresSection key="Professores" />],
  ["Coordenadores", <CoordenadoresSection key="Coordenadores" />],
  ["Gestores", <GestoresSection key="Gestores" />],
  ["Escolas", <EscolasSection key="Escolas" />],
];

export default function Sections({ active }) {
  return (
    <MainContent>
      {sections.map((section) => {
        return section[0] === active ? section[1] : null;
      })}
    </MainContent>
  );
}
