import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component{
	constructor(props){
		super(props)
	}
	login =(e)=>{
		e.preventDefault();
		
		let email = e.target.email.value;
		let password = e.target.password.value;
		let username = e.target.username.value;
		
		window.firebase.auth().createUserWithEmailAndPassword(email,password)
		.then((res) => {
			console.log(res);
		})
		.catch(
			function(err) {
				console.log(err.code);
				
			}
		)
	}
	render(){
		return(
			<div className="signIn"> 
				<form onSubmit={this.login}>
					<h3>Sign Up</h3>
					<p>
						<label>User Name</label>
						<input type="text" name="username"></input>
					</p>
					<p>
						<label>Email Address</label>
						<input type="email" name="email"></input>
					</p>
					<p>

						<label>Password</label>
						<input type="password" name="password"></input>
					</p>
					
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default Login;