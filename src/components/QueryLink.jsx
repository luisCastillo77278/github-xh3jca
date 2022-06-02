import { NavLink, useLocation } from 'react-router-dom';
const QueryLink = ({ children, to, ...props }) => {
  const location = useLocation();
  return (
    <NavLink to={to + location.search} {...props}>
      {children}
    </NavLink>
  );
};

export default QueryLink;
