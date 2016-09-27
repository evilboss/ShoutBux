import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>New User?</h4>
        <form>
          <div className="form-group">
            <input
              className="form-control input-sm"
              id="signup-username"
              placeholder="Username"
            />
            <input
              className="form-control input-sm"
              id="signup-fullname"
              placeholder="Full Name (Optional)"
            />
            <input
              className="form-control input-sm"
              id="signup-password"
              placeholder="Password"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-info fullbutton"
            id="signup">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
