import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Already have an account?</h4>
        <form>
          <div className="form-group">
            <input
              className="form-control input-sm"
              id="login-username"
              placeholder="Username"
            />
            <input
              className="form-control input-sm"
              id="login-password"
              placeholder="Password"
              type="password"
            />

          </div>
          <button
            type="submit"
            className="btn btn-info fullbutton login"
            id="login">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
