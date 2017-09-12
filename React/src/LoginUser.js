import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Img from 'react-image';

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {blue800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logoSuccess from './images/loggedin.png';
import logoError from './images/wrongPwd.jpg';

import './LoginUser.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue800,
  },
});
class LoginUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  firstname: '',
		  lastname:'',
		  password:'',
		  message:'',
		  isShowingModal: false,
		  isShowingErrorModal: false
		};
		this.handleUserLogin = this.handleUserLogin.bind(this);
	  }
	handleClick = () => this.setState({isShowingModal: true})
	handleClose = () => this.setState({isShowingModal: false, isShowingErrorModal: false})
    handleUserLogin() {
		fetch('http://localhost:3001/sessions/create', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			"username": this.state.firstname ,
			"password": this.state.password
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log('Access Token',responseJson.access_token);
			this.setState({
				message:'User has been logged in successfully',
				isShowingModal: true
			});
			//return responseJson.access_token;
		})
		.catch((error) => {
			console.log('User Login Failed');
			this.setState({
				message:'User Login Failed.',
				isShowingErrorModal: true
			});
			//console.error(error);
		});				
	}
  render() {
    return (
			<div>
				<h1>Login</h1>
				<div className="Container">
					<div className="row">	
						<label name="labelfield">First Name:</label>
						<input name="inputUserName" value={this.state.firstname} onChange={this.handleFirstName.bind(this)}/>
						<p>You have entered first name as <span>{this.state.firstname}</span> </p>

					</div>
					<div className="row">	
						<label name="labelfield">Password:</label>
						<input type="password" name="inputPassword" value={this.state.password} onChange={this.handlePassword.bind(this)} />
						<p>You have entered password as <span>{this.state.password}</span> </p>
					</div>
					
					<div className="">
					<span className="subtitle">
						<MuiThemeProvider muiTheme={muiTheme}>
							<Checkbox label="Remember User id?"></Checkbox>
						</MuiThemeProvider>																				
					</span>
						
					</div>
					
					
					<div className="row">	
						<div className="width45">
							<MuiThemeProvider muiTheme={muiTheme}>
								<RaisedButton label="Login" secondary={true} onClick={this.handleUserLogin}/>
							</MuiThemeProvider>
						</div>
					</div>
					<div className="row">
						<div>						
							{
								this.state.isShowingModal &&
								<ModalContainer onClose={this.handleClose}>
								  <ModalDialog onClose={this.handleClose}>
										<p> Welcome <span class="boldHighlightText">{this.state.firstname}</span>!! You have been successfully logged in.</p>
										<div id="imageContainer">
											<img className="successImage" src={logoSuccess}></img>
										</div>
								  </ModalDialog>
								</ModalContainer>
							  }							  
						</div>			
					</div>	
					<div className="row">
						<div>						
							{
								this.state.isShowingErrorModal &&
								<ModalContainer onClose={this.handleClose}>
								  <ModalDialog onClose={this.handleClose}>
										<div id="imageContainer">
											<img className="successImage" src={logoError}></img>
										</div>
								  </ModalDialog>
								</ModalContainer>
							  }							  
						</div>			
					</div>					
					<div className="row">	
						 <div className="messages">
								<h3>{this.state.message}</h3>
						</div>
					</div> 					
				</div>
			</div>
    );
  }
   handleFirstName(e) {
	this.setState({firstname:e.target.value});
  }
   handleLastName(e) {
	this.setState({lastname:e.target.value});
  }
  handlePassword(e) {
	this.setState({password:e.target.value});
  }
  
}

function PrimaryButton(props){
	return (
		 <button onClick={props.onClick} className="indigo">{props.name}</button>  
	);
}

export default LoginUser;
