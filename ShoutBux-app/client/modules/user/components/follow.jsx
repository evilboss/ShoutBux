import React from 'react';

class Follow extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {following, unfollowedUsers}=this.props;
		console.log(unfollowedUsers);
		return (
			<div className="follow-container">
				<div className="panel panel-default followBox">
					<div className="panel-body">
						
						<div className="">
							<h4>Users that you follow</h4>
							<ul>
								{(following) ? following.map((follower, index)=>(
									<li key={index}><a href={`/${follower}`}>{follower}</a></li>
								)) : ''}
							</ul>
						</div>
						<div className="">
							<h4>Users that you can Follow</h4>
							<ul>
								{(unfollowedUsers) ? unfollowedUsers.map((follower, index)=>(
									<li key={index}><a href={`/${follower}`}>{follower}</a></li>
								)) : ''}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Follow;
