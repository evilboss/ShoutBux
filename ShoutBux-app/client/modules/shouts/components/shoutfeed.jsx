import React from 'react';
import moment from 'moment';
import ShoutItem from '../containers/shout_item';
class Shoutfeed extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {shouts} = this.props;
    return (
      <div className="container">
        {shouts.map((shout, index)=>(
            <div className="panel panel-info" key={index}>
              <ShoutItem userId={shout.owner} shout={shout.text} date={shout.date}/>
            </div>
          )
        )}
      </div>

    );
  }
}

export default Shoutfeed;
