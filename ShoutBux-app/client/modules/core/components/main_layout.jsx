import React from 'react';

const Layout = ({content = () => null}) => (
  <div className="bg row">
    {content()}
  </div>

);

export default Layout;
