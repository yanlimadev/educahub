import defaultPropTypes from '../../../assets/js/defaultPropTypes';

export default function AsideMenu({ children }) {
  return <ul id="aside-menu">{children}</ul>;
}

AsideMenu.propTypes = defaultPropTypes;
