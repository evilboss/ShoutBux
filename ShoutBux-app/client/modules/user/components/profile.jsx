import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    Meteor.logout();
  }

  render() {
    const {user} = this.props;
    const defaultPhoto = '/default.jpg';
    return (
      <div className="col-md-4 col-xs-4">
        <div className="user-container">
          <div className="panel panel-default userBox">
            <div className="panel-body">
              <p>Hello <strong>@{user.username}</strong>,welcome to ShoutBux</p>
              <div className="row">
                {(user.profile) ?
                  <div className="col-md-4">
                    <img className="avatar"
                         src={(user.profile.displayPhoto)?user.profile.displayPhoto:defaultPhoto}/>
                    <div>
                      {(user.profile.fullname) ? user.profile.fullname : ''}
                    </div>
			    <span>
				    @<span>{user.username}</span>
			    </span>
                  </div> : ''
                }

                <div className="col-md-8">
                  <button type="button" className="btn btn-info fullbutton" id="logout"
                          onClick={this.logout.bind(this)}>Log
                    out
                  </button>
                </div>
              </div>
              <table className="table">
                <thead>
                <tr>
                  <td className="tableHeader">Tweets</td>
                  <td className="tableHeader">Following</td>
                  <td className="tableHeader">Followers</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="tableContent">Shouts</td>
                  <td className="tableContent">Following</td>
                  <td className="tableContent">Followers</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Profile.defaultProps = {
  user: React.PropTypes.object.isRequired,
};
export default Profile;
