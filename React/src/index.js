import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserCreate from './UserCreate';
import LoginUser from './LoginUser';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<UserCreate />,
	document.getElementById('userCreateElement')
);
ReactDOM.render(
	<LoginUser />,
	document.getElementById('loginUserElement')
);

function Welcome(props) {
  return <h1>Welcome to {props.name}</h1>;
}
const element = <Welcome name="React" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

registerServiceWorker();
