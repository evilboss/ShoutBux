import React from 'react';

const Layout = ({content = () => null}) => (
  <div className="row">
    {content()}
  </div>
);

export default Layout;
