import MainContentItem from '../../../../../components/common/MainContentItem';
import { useEffect, useState } from 'react';
import StudentCard from '../../../../../components/common/StudentCard';

export default function EstudantesMainContentItem() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/yanlimadev/mocks/main/mock_students.json')
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);

  return (
    <MainContentItem className={'grid grid-cols-3 gap-4 mt-4'}>
      {students.map((student, index) => {
        return <StudentCard object={student} key={index}></StudentCard>;
      })}
    </MainContentItem>
  );
}
