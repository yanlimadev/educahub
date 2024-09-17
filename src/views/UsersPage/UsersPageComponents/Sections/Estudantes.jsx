import SearchBar from '../../../../components/common/SearchBar';
import SearchContextProvider from '../../UsersPageContexts/SearchContext';
import EstudantesMainContentItem from './Estudantes/EstudantesMainContentItem';

export default function EstudantesSection() {
  return (
    <SearchContextProvider>
      <SearchBar></SearchBar>
      <EstudantesMainContentItem />
    </SearchContextProvider>
  );
}
