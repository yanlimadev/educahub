import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function MainContent({ children }) {
  return <div className="p-8 w-full h-full overflow-y-scroll">{children}</div>;
}

MainContent.propTypes = defaultPropTypes;
