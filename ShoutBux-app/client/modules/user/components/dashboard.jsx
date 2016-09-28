import React from 'react';
import Follow from '../containers/follow';
import Login from '../containers/login';
import Signup from '../containers/signup';
import Profile from '../containers/profile';
import Shoutfeed from '/client/modules/shouts/containers/shoutfeed';
import ShoutBox from '/client/modules/shouts/containers/shout_box';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
      <div className="row">

        {(user) ?
          <div>
            <Profile user={user}/>
            <Follow/>
            <Shoutfeed/>
            <ShoutBox/>
          </div>
          :
          <Login/>
        }
      </div>
    );
  }
}
Dashboard.defaultProps = {
  user: React.PropTypes.object,
};
export default Dashboard;
