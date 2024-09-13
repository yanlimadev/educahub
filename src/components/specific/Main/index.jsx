import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function Main({ children }) {
  return <main className="w-full h-screen flex flex-col font-sans">{children}</main>;
}

Main.propTypes = defaultPropTypes;
