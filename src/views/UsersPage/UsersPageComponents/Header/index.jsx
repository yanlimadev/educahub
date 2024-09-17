import { useContext } from 'react';
import { TabContext } from '../../UsersPageContexts/TabContext';
import MainHeader from '../../../../components/specific/MainHeader';
import Icon from '../../../../components/common/IconsLib';
import MainHeaderItem from '../../../../components/common/MainHeaderItem';

let items = [
  ['Estudantes', 'AcademicCapIcon', 'size-6 text-blue-700'],
  ['Professores', 'BookOpenIcon', 'size-6 text-blue-700'],
  ['Coordenadores', 'ClipboardDocumentCheckIcon', 'size-6 text-blue-700'],
  ['Gestores', 'BriefcaseIcon', 'size-6 text-blue-700'],
  ['Escolas', 'BuildingLibraryIcon', 'size-6 text-blue-700'],
];

export default function Header() {
  const { state, setActive } = useContext(TabContext);

  return (
    <MainHeader>
      {items.map((item) => {
        let isActiveItem = item[0] === state.activeTab ? true : false;

        return (
          <MainHeaderItem
            key={item[0]}
            label={item[0]}
            active={isActiveItem}
            onClick={() => {
              setActive(item[0]);
            }}
          >
            <Icon iconName={item[1]} className={item[2]} />
          </MainHeaderItem>
        );
      })}
    </MainHeader>
  );
}
