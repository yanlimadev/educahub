import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function MainContentItem({ children, className }) {
  return <section className={className}>{children}</section>;
}

MainContentItem.propTypes = defaultPropTypes;
