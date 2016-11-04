import React from 'react';
import Dashboard from '../containers/dashboard';
class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userId} = this.props;
    return (
      <div>
        <Dashboard userId={userId}/>
      </div>
    );
  }
}

export default Timeline;
