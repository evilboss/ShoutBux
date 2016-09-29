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
				{(shouts) ? shouts.map((shout, index)=>(
						<div className="panel panel-info" key={index}>
							<ShoutItem shoutId={shout._id} userId={shout.owner} shout={shout.text} date={shout.date}/>
						</div>
					)
				) : <div className="panel panel-info"><h3>Not following this user</h3></div>}
			</div>
		
		);
	}
}

export default Shoutfeed;
