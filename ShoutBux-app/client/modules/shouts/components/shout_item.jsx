import React from 'react';

class ShoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
  }

  timeAgo(date) {
    return momentReactive(date).fromNow();
  }

  _update() {
    const shout = this.refs.shout.value;
    const {shoutId, update} = this.props;
    update(shoutId, shout);
    this.refs.shout.value = '';
    this.setState({isEditing: !this.state.isEditing});
  }

  _delete() {
    const {shoutId, _remove} = this.props;
    _remove(shoutId);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  render() {
    const {user, shout, date}= this.props;
    const {isEditing} = this.state;
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
            {(isEditing) ? <div><input ref="shout" type="text"/>
              <button onClick={this._update.bind(this)}>Update</button>
              <button onClick={this.toggleEdit.bind(this)}>Cancel</button>
            </div> : <div>{shout}
              {(Meteor.userId() == user._id) ?
                <div>
                  <button onClick={this.toggleEdit.bind(this)}>edit</button>
                  <button onClick={this._delete.bind(this)}>Delete</button>
                </div> : ''
              }

            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoutItem;
