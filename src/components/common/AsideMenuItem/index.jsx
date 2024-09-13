import P from 'prop-types';
import './AsideMenuItem.css';

export default function AsideMenuItem({ children, label, href, active }) {
  return (
    <a href={href}>
      <li className={'aside-menu-item cursor-pointer' + (active ? ' active' : '')}>
        <div className="w-11 h-11 centralize-content">{children}</div>
        <h1 className="ms-5 text-white">{label}</h1>
      </li>
    </a>
  );
}

AsideMenuItem.propTypes = {
  children: P.elementType,
  label: P.string,
  href: P.string,
  active: P.bool,
};
