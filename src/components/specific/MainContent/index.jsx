import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function MainContent({ children, className }) {
  return <div className={'p-8 w-full h-full overflow-y-scroll ' + className}>{children}</div>;
}

MainContent.propTypes = defaultPropTypes;
