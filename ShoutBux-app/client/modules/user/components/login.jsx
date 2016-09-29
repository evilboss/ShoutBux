import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  _login() {
    console.log('submiting');
    const {login} = this.props;
    login(this.refs.username.value, this.refs.password.value);
  }

  render() {
    const {err} = this.props;
    console.log(err);
    return (
      <div className="">
        <div className="user-container">
          <div className="panel panel-default userBox">
            <div className="panel-body"><h4>Already have an account?</h4>
              {err ?
                <span className="alert alert-danger">
              <span className="error-text">
                {err}
              </span>
          </span>
                : '' }
              <form>
                <div className="form-group">
                  <input className="form-control input-sm" id="login-username" ref="username" placeholder="Username"/>
                  <input className="form-control input-sm" id="login-password" ref="password" placeholder="Password"
                         type="password"/>
                </div>
                <button type="button" className="btn btn-info fullbutton login" id="login"
                        onClick={this._login.bind(this)}>
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
