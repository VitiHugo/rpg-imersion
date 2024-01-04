export const ConditionalWrap = ({ condition, wrap, children }) => (
  condition ? wrap(children) : children
);