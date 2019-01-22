import React from 'react'
import ReactDOM from 'react-dom'
import './css/app.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import About from './about'
const routing = (
  <Router>
    <div>
			<div className="left">
			<h1>Template</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.</p>
			<div className="menu">
				<div className="menu_a"><Link to="/">HOME</Link></div>
				<div className="menu_a"><Link to="/about">ABOUT</Link></div>
			</div>
			<div className="social_icons">
				<div className="icon"><img src="img/FacebookIcon.png"></img></div>
				<div className="icon"><img src="img/InstagramIcon.png"></img></div>
				<div className="icon"><img src="img/GithubIcon.png"></img></div>
				<div className="icon"><img src="img/TwitterIcon.png"></img></div>
			</div>
			</div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))