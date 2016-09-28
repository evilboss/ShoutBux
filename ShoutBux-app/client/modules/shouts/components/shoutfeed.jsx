import React from 'react';

class Shoutfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {shouts} = this.props;
    return (
      <div className="shoutBuxfeed-container">


        {shouts.map((shout, index)=>(
            <div className="panel panel-info" key={index}>
              <div className="panel-heading">
                <h3 className="panel-title">@{shout.owner}
                <span className="glyphicon glyphicon-triangle-right" aria-hidden="true">
                  {shout.text}
                </span>

                </h3>
              </div>
            </div>
          )
        )}


      </div>

    );
  }
}

export default Shoutfeed;
