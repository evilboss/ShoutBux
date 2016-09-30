import React from 'react';
class FollowBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  _follow() {
    const {userId, follow} = this.props;
    follow(userId);
  }

  render() {
    return (
      <button onClick={this._follow.bind(this)} className=" inline btn-follow pull-right btn fa fa-user-plus"><span> Follow</span>
      </button>
    );
  }
}
FollowBtn.defaultProps = {
  userId: React.PropTypes.string.isRequired,
  follow: React.PropTypes.func.isRequired,
};
export default FollowBtn;
