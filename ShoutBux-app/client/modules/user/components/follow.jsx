import React from 'react';

class Follow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {following}=this.props;
    return (
      <div className="follow-container">
        <div className="panel panel-default followBox">
          <div className="panel-body">

            <div className="found-user">
              <h4>Users that you follow</h4>
              <ul>
                {(following) ? following.map((follower, index)=>(
                  <li><a href={`/${follower}`}>{follower}</a></li>
                )) : ''}
              </ul>
            </div>
            <div className="recommend-users">
              <h4>Users that you can Follow</h4>

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
