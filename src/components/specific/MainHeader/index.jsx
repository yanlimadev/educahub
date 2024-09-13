import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function MainHeader({ children }) {
  return (
    <header className="w-full h-28 shadow-lg no-select">
      <ul className="flex mx-12">{children}</ul>
    </header>
  );
}

MainHeader.propTypes = defaultPropTypes;
