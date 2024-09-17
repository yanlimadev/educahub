import P from 'prop-types';

const defaultPropTypes = {
  className: P.string,
  // children: P.oneOfType([P.array, P.elementType, P.object]),
  children: P.node,
  onClick: P.func,
  label: P.string,
};

export default defaultPropTypes;
