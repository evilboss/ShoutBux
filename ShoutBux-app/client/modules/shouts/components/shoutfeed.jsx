import React from 'react';

class Shoutfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shoutBuxfeed-container">
        <div className="panel panel-default shoutBuxfeed">
          <div className="panel-body">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">@
                  <span className="glyphicon glyphicon-triangle-right" aria-hidden="true">
                    
                  </span>

                </h3>
              </div>
              <div className="panel-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoutfeed;
