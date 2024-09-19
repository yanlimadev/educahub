import SearchContextProvider from '../../UsersPageContexts/SearchContext';
import EstudantesMainContentItem from './Estudantes/EstudantesMainContentItem';
import EstudantesSearchBar from './Estudantes/EstudantesMainContentSearchBar';

export default function EstudantesSection() {
  return (
    <SearchContextProvider>
      <EstudantesSearchBar />
      <EstudantesMainContentItem />
    </SearchContextProvider>
  );
}
