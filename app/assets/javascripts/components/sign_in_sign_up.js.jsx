// import styles from './table.css';
// import styles from './css/form-elements-login-popup.csss';
// import styles from 'assets/css/style-login-popup.css';
var SignInSignUp = React.createClass({

	getInitialState: function () {
	   return {
	     signin: true
	   }
	},

	open_signup: function () {
	   this.setState({signin: false});
	 },

	 open_signin: function () {
	   this.setState({signin: true});
	 },

  render: function() {
	let open = 	<form class="new_user" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post">
					<div>
					  <input name="utf8" type="hidden" defaultValue="✓" /><input type="hidden" name="authenticity_token" defaultValue="nKnU8rJQcWyGVx9UEtcN39NI3rIXcJR8eApfKgQTFZPod73iW4b6j8hIoue1TRafpskT/WN4dRmCHh6/UuSlNQ==" />
					</div>
					<div className="modal hide" id="myModal">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h3 className="modal-title" id="modal-login-label">Login to our site</h3>
									<button type="button" className="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
									</button>
								</div>
								<div className="modal-body">
									<form role="form" action="" method="post" className="login-form">
						            	<div className="form-group">
						            		<label className="sr-only" for="form-username">Username</label>
		                					<input type="text" placeholder="Username..." className="form-username form-control" name="user[email]" id="user_email"/>
						                </div>
						                <div className="form-group">
						                	<label className="sr-only" for="form-password">Password</label>
						                	<input type="password" placeholder="Password..." className="form-password form-control" name="user[password]" id="user_password"/>
						            		<a href="#" className="modal-forgot-link" id="modal-forgot-password">Forgot password?</a>
						                </div>
						                <button name="commit" value="Log in" data-disable-with="Log in"type="submit" className="btn">Sign in!</button>
						            </form>
						            <div className="modal-signup-link" onClick={this.open_signup} id="modal-signup-button">New User? Sign up</div>
								</div>
							</div>
						</div>
					</div>
				</form>

	if (this.state.signin == false){
		open = <div className="modal hide" id="myModal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h3 className="modal-title" id="modal-login-label">Signup to our site</h3>
								<button type="button" className="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span><span className="sr-only">Close</span>
								</button>
							</div>
							<div className="modal-body">
								<form role="form" action="" method="post" className="login-form">
					            	<div className="form-group">
					            		<label className="sr-only" for="form-username">Username</label>
	                					<input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username"/>
					                </div>
					                <div className="form-group">
					                	<label className="sr-only" for="form-password">Password</label>
					                	<input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password"/>
					                </div>
					                <button type="submit" className="btn">Sign up!</button>
					            </form>
					            <div className="modal-signup-link" onClick={this.open_signin} id="modal-signup-button">Already regidtered? Sign in</div>
							</div>
						</div>
					</div>
				</div>
	}

    return (
    		<div> {open} </div>
    	);
  }
});
