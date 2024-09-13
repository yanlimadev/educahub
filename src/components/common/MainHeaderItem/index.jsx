import './HeaderMenuItem.css';
import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function MainHeaderItem({ children, label, active, onClick }) {
  return (
    <li className={active ? 'header-menu-item active' : 'header-menu-item'} onClick={onClick}>
      <div className="w-11 h-11 centralize-content">{children}</div>
      <h1 className="mt-2 uppercase">{label}</h1>
    </li>
  );
}

MainHeaderItem.propTypes = defaultPropTypes;
