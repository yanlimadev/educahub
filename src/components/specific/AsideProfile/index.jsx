import defaultPropTypes from '../../../assets/js/defaultPropTypes';
import P from 'prop-types';

export default function AsideProfile({ name, role }) {
  return (
    <div className="h-32 w-full p-3 flex items-center flex-col">
      <div className="w-16 h-16 bg-slate-300 rounded-full" />
      <h1 className=" text-white text-sm">{name}</h1>
      <h3 className="uppercase text-white text-xs">{role}</h3>
    </div>
  );
}

AsideProfile.propTypes = {
  ...defaultPropTypes,
  name: P.string.isRequired,
  role: P.string.isRequired,
};
