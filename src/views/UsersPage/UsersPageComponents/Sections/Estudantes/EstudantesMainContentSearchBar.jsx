import { useContext } from 'react';
import { SearchContext } from '../../../UsersPageContexts/SearchContext';

export default function EstudantesSearchBar() {
  const { searchByName, searchByCourse } = useContext(SearchContext);

  function handleNameChange(e) {
    searchByName(e.target.value);
  }

  function handleCourseChange(e) {
    searchByCourse(e.target.value);
  }

  return (
    <div className="w-full">
      <form className="order-first w-auto flex flex-row items-end bg-blue-50 p-2.5 rounded-lg sticky t-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            className="p-2 rounded-lg indent-2"
            onChange={handleNameChange}
          />
        </div>
        <div className="flex flex-col ms-4">
          <label htmlFor="course" className="font-semibold">
            Curso:
          </label>
          <input
            type="text"
            id="course"
            placeholder="Curso"
            className="p-2 rounded-lg indent-2"
            onChange={handleCourseChange}
          />
        </div>
      </form>
    </div>
  );
}
