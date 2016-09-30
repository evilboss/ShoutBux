import React from 'react';
import Follow from '../containers/follow';
import Login from '../containers/login';
import Profile from '../containers/profile';
import Shoutfeed from '/client/modules/shouts/containers/shoutfeed';
import ShoutBox from '/client/modules/shouts/containers/shout_box';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, stats, userId} = this.props;
    return (
      <div>
        {(user) ?
          <div className="bg row">
            <div className="col-md-4 col-xs-4">
              <Profile user={user} stats={stats}/>
              <Follow />
            </div>
            <div className="col-md-8 col-xs-8">
              {(userId) ? '' : <ShoutBox/>}
              <Shoutfeed userId={userId}/>
            </div>
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
