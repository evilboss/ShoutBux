import React from 'react';
import ButtonFollow from '/client/modules/user/containers/follow_btn';

class Follower extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultPhoto = '/default.jpg';
    const {user, userId, following}= this.props;
    return (
      <div>
        {(user) ?
          <div className="followed">
            <a href={(userId)?`/${userId}`:''} className="inline">

              {(user.profile) ?
                <div>
                  <img src={(user.profile.displayPhoto) ?user.profile.displayPhoto: defaultPhoto}/>
                  <div className="inline">
                    {(user.profile.fullname) ? <span className="fullname">{user.profile.fullname}</span> : ''}
                  </div>
                  <div>
                    {(user.username) ?
                      `@${user.username}`
                      : ''
                    }
                  </div>
                </div>
                : ''
              }
            </a>
            {(following) ? '' : <ButtonFollow userId={userId} />}
          </div>
          : ''}
      </div>
    );
  }
}
Follower.defaultProps = {
  user: React.PropTypes.object.isRequired,
  userId: React.PropTypes.string.isRequired,
  following: React.PropTypes.bool.isRequired,
};

export default Follower;
