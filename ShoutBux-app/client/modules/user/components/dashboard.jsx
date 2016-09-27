import React from 'react';
import Follow from '../containers/follow';
import Login from '../containers/login';
import Signup from '../containers/signup';
import Shoutfeed from '/client/modules/shouts/containers/shoutfeed';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-xs-4">
          <div className="user-container">
            <div className="panel panel-default userBox">
              <div className="panel-body">
                <Login/>
                <Signup/>
              </div>
            </div>
          </div>
        </div>
        <Follow/>
        <div className="col-md-8 col-xs-8">
          <div className="shoutbux-container">
            <div className="panel panel-default shoutbux">
              <div className="panel-body">
                <textarea
                  ref="textarea"
                  id="tweetText"
                  className="form-control"
                  placeholder="Shout Something!"
                  rows="3"/>
                <div className="pull-right btnGroup">
                  <strong>

                  </strong>
                  <button
                    className="btn btn-info pull-right"
                    type="button"
                  >Shout!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
