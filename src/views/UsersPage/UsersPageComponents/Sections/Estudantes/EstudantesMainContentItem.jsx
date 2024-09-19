import MainContentItem from '../../../../../components/common/MainContentItem';
import { useEffect, useState, useContext } from 'react';
import StudentCard from '../../../../../components/common/StudentCard';
import { SearchContext } from '../../../UsersPageContexts/SearchContext';

export default function EstudantesMainContentItem() {
  const studentsPerPage = 12;

  const [students, setStudents] = useState([]);
  const [studentsNumber, setStudentsNumber] = useState(studentsPerPage);
  const [studentsInView, setStudentsInView] = useState([]);

  const {
    searchValue: { nome, curso },
  } = useContext(SearchContext);

  function ShowMoreButton() {
    return (
      <div className="flex items-center justify-center w-full col-span-3">
        <button
          className="bg-blue-500 text-white rounded-lg p-4"
          onClick={() => setStudentsNumber((prev) => prev + studentsPerPage)}
        >
          Mostrar mais
        </button>
      </div>
    );
  }

  function includesNome(object, value) {
    return object.nome.toLowerCase().includes(value.toLowerCase());
  }

  function includesCurso(object, value) {
    return object.curso.toLowerCase().includes(value.toLowerCase());
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yanlimadev/mocks/main/mock_students.json')
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);

  useEffect(() => {
    setStudentsInView(() => {
      if (nome === '' && curso === '') {
        return students.slice(0, studentsNumber);
      }

      const filteredStudents = students.filter((student) => {
        return includesNome(student, nome) && includesCurso(student, curso);
      });

      return filteredStudents;
    });
  }, [students, nome, curso, studentsNumber]);

  return (
    <MainContentItem className={'grid grid-cols-3 gap-4 mt-4'}>
      {studentsInView.map((student, index) => {
        return <StudentCard object={student} key={index}></StudentCard>;
      })}
      {(() => {
        if (nome || curso || studentsNumber >= students.length) {
          return null;
        }
        return <ShowMoreButton />;
      })()}
    </MainContentItem>
  );
}
