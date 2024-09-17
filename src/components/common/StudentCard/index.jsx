import P from 'prop-types';
import './StudentCard.css';

export default function StudentCard({ object }) {
  const { nome, matricula, curso } = object;
  const stts = object.status;

  return (
    <div className="student-card">
      <div className="p-4">
        <div className="profile-image"></div>
      </div>

      <div className="student-card-text">
        <h1>{nome}</h1>
        <h2>{matricula}</h2>
        <h2>{curso}</h2>

        <div className="indicator">
          <div className={'status-ball ' + stts}></div>
          <h3>{stts}</h3>
        </div>
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  object: P.shape({
    nome: P.string,
    matricula: P.string,
    curso: P.string,
    status: P.string,
  }),
};
