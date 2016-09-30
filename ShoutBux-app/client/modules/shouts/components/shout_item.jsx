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
        <div className="col-sm-12">

          <div className="row panel-heading">
            <div className="col-sm-1">
              <img className="img-responsive user-photo"
                   src={(user.profile.displayPhoto)?user.profile.displayPhoto:defaultPhoto}/>
            </div>
            <div className="col-sm-11">
              <strong>@{(user) ? (user.username) ? user.username : '' : ''}</strong>
              <span className="text-muted pull-right">{this.timeAgo(date)}</span>
            </div>
          </div>
          <div className="panel-body">
            <div className="col-sm-1"></div>
            <div className="col-sm-11">
              {(isEditing) ? <div>
                <textarea ref="shout" className="form-control" rows="3"></textarea>
                <div className="btnGroup">
                  <button onClick={this.toggleEdit.bind(this)} className="btn pull-right">Cancel</button>
                  <button onClick={this._update.bind(this)} className="btn btn-info pull-right">Update</button>
                </div>
              </div> : <div>{shout}
              </div>}
            </div>
          </div>
          <div className="row panel-body-footer">
            {(!isEditing) ?
              (Meteor.userId() == user._id) ?
                <div className="pull-right shout-actions">
                  <span onClick={this.toggleEdit.bind(this)} className="btn glyphicon glyphicon-pencil"></span>
                  <span onClick={this._delete.bind(this)} className="btn glyphicon glyphicon-trash"></span>
                </div> : ''
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoutItem;
