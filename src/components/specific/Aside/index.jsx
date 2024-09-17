import logo from '../../../assets/images/logo.png';
import P from 'prop-types';
import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function Aside({ children, profile }) {
  return (
    <aside className="w-60 h-screen bg-blue-600 z-10 no-select">
      {/* Brand */}
      <div className="w-full h-28 flex centralize-content">
        <img src={logo} alt="logo" />
      </div>

      {/* Profile */}
      <hr />
      {profile}
      <hr />

      {/* Links */}
      <div>{children}</div>
    </aside>
  );
}

Aside.propTypes = {
  ...defaultPropTypes,
  profile: P.object,
};
