import React, { Component } from 'react';
//import logo from './logo.svg';
import './UserCreate.css';
import RaisedButton from 'material-ui/RaisedButton';
import {blue800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue800,
  },
});

class UserCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  firstname: '',
		  lastname:'',
		  password:'',
		  extra:'',
		  message:''
		};
		this.handleCreateUser = this.handleCreateUser.bind(this);
	  }
    handleCreateUser() {
		fetch('http://localhost:3001/users', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			"username": this.state.firstname ,
			"password": this.state.password,
			"extra": this.state.extra
		  })
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log('Access Token',responseJson.access_token);
			this.setState({
				message:'User has been created successfully'
			});
			//return responseJson.access_token;
		})
		.catch((error) => {
			console.log('User creation Failed');
			this.setState({
				message:'A user with that username already exists.'
			});
			//console.error(error);
		});				
	}
  render() {
    return (
	<div>
        <h1>Create User</h1>
        <div className="Container">
            <div className="row">	
                <label name="labelfield">First Name:</label>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleFirstName.bind(this)} /> 
                <p>You have entered first name as <span>{this.state.firstname}</span></p>            
            </div>
             <div className="row">	
                <label name="labelfield">Last Name:</label>
                <input name="lastname" value={this.state.lastname} onChange={this.handleLastName.bind(this)}/>
                <p>You have entered last name as <span>{this.state.lastname}</span></p>           
            </div>
            <div> Computed Full name is {this.state.firstname} {this.state.lastname}</div>
            <div className="row">	
                <label name="labelfield">Password:</label>
                <input type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
                <p>You have entered password as <span>{this.state.password}</span></p>
            </div>
             <div className="row">	
                <label name="labelextra">Extra:</label>
                <input name="inputExtra" value={this.state.extra} onChange={this.handleExtra.bind(this)}/> 
            </div>
             <div className="row">	
			 {/* working custom component   
					<div className="width45">
					<PrimaryButton onClick={this.handleCreateUser} name="Create User"></PrimaryButton>
				</div>*/}
				<MuiThemeProvider muiTheme={muiTheme}>
					<RaisedButton label="Create User" secondary={true} onClick={this.handleCreateUser}/>
				</MuiThemeProvider>
            </div>  
			<div className="row">	
				 <div className="messages">
						<h4>{this.state.message}</h4>
				</div>
            </div>  
        </div>
	</div>
    );
  }
   handleFirstName(e) {
	this.setState( {firstname:e.target.value});
  }
   handleLastName(e) {
	this.setState( {lastname:e.target.value});
  }
  handlePassword(e) {
	this.setState( {password:e.target.value});
  }
   handleExtra(e) {
	this.setState( {extra:e.target.value});
  }  
  
}

function PrimaryButton(props){
	return (
		 <button onClick={props.onClick} className="indigo">{props.name}</button>  
	);
}
export default UserCreate;
