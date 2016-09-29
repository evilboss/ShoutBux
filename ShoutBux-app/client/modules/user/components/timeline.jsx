import React from 'react';
import Dashboard from '../containers/dashboard';
class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {userId} = this.props;
    console.log(userId);
    return (
      <div>
        <Dashboard userId={userId}/>
      </div>
    );
  }
}

export default Timeline;
