import React from 'react';

class ShoutBox extends React.Component {
  constructor(props) {
    super(props);
  }

  _create() {
    console.log('click');
    const {create} = this.props;
    create(this.refs.shout.value);
    this.refs.shout.value='';
  }

  render() {
    const {err} = this.props;
    return (
      <div className="col-md-8 col-xs-8">
        <div className="shoutbux-container">
          <div className="panel panel-default shoutbux">
            <div className="panel-body">
              {(err) ? <div className="alert alert-danger">
                <strong>{err}</strong>
              </div> : ''}


                <textarea
                  ref="shout"
                  id="shoutText"
                  className="form-control"
                  placeholder="Shout Something!"
                  rows="3"/>
              <div className="pull-right btnGroup">
                <strong>
                </strong>
                <button className="btn btn-info pull-right" onClick={this._create.bind(this)} type="button">Shout!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoutBox;
