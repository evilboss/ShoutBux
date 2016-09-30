import React from 'react';
import moment from 'moment';
import ShoutItem from '../containers/shout_item';
import ButtonFollow from '/client/modules/user/containers/follow_btn';

class Shoutfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {shouts, userId} = this.props;
    return (
      <div className="shoutbux-list">
        {(shouts) ? shouts.map((shout, index)=>(
            <div className="panel panel-info" key={index}>
              <ShoutItem shoutId={shout._id} userId={shout.owner} shout={shout.text} date={shout.date}/>
            </div>
          )
        ) : <div className="panel panel-info text-center">
          <h1 className="inline">Not yet following!</h1>
          <ButtonFollow userId={userId}/>
        </div>}
      </div>

    );
  }
}
Shoutfeed.defaultProps = {
  shouts: React.PropTypes.array.isRequired,
};

export default Shoutfeed;
