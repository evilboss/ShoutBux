import React from 'react';

class ShoutItem extends React.Component {
  constructor(props) {
    super(props);
  }

  timeAgo(date) {
    return momentReactive(date).fromNow();
  }

  render() {
    const {user, shout, date}= this.props;
    const defaultPhoto = '/default.jpg';
    return (
      <div className="row">
        <div className="col-sm-1">
          <div className="thumbnail">
            <img className="img-responsive user-photo"
                 src={(user.profile.displayPhoto)?user.profile.displayPhoto:defaultPhoto}/>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="panel-heading">
            <strong>@{(user) ? (user.username) ? user.username : '' : ''}</strong> <span
            className="text-muted">{this.timeAgo(date)}</span>
          </div>
          <div className="panel-body">
            {shout}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoutItem;
