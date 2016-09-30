import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    Meteor.logout();
  }

  render() {
    const {user, stats} = this.props;
    const defaultPhoto = '/default.jpg';
    return (
      <div className="">
        <div className="user-container">
          <div className="panel panel-default userBox">
            <div className="panel-body">
              {(Meteor.userId() == user._id) ?
                <h4>Hello <strong>@{user.username}</strong>,welcome to ShoutBux</h4> :
                <h4><a href="/">Home</a></h4>}
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
                  <td className="tableHeader">Shouts</td>
                  <td className="tableHeader">Following</td>
                  <td className="tableHeader">Followers</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="tableContent">{stats.shouts}</td>
                  <td className="tableContent">{stats.following}</td>
                  <td className="tableContent">{stats.follwers}</td>
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
