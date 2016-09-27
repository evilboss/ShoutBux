import React from 'react';

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="follow-container">
        <div className="panel panel-default followBox">
          <div className="panel-body">
            <form className="form-inline" onSubmit={this.findUser}>
              <input
                type="text"
                className="form-control"
                id="searchUser"
                placeholder="Search for user"
              />
              &nbsp;
              <button type="submit" className="btn btn-info">Search</button>
            </form>
            <div className="found-user">
              <button type="button" className="btn btn-default" id="follow">Follow @</button>
            </div>
            <div className="recommend-users">
              <p>
                <button type="button" className="btn btn-default" id="followRec">
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Follow;
