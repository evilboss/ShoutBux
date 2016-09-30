import React from 'react';
import Follower from '../containers/follower';

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {following, unfollowedUsers}=this.props;
    return (
      <div className="follow-container">
        <div className="panel panel-default followBox">
          <div className="panel-body">

            <h4>Users that you follow</h4>
            {(following) ? following.map((follower, index)=>(
              <Follower userId={follower} key={index} following={true}/>
            )) : ''}
            <div className="can-follow">
              <h4>Users that you can Follow</h4>
              {(unfollowedUsers) ? unfollowedUsers.map((follower, index)=>(
                <Follower userId={follower} key={index} following={false}/>
              )) : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Follow;
