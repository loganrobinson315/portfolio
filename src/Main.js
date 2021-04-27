import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './Home'
import Stuff from './Stuff'
import Contact from './Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FadeTransition from './transitions/fadeTransistion'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

library.add(fab)

class Main extends Component {
  render () {
    return (
      <HashRouter>
        {/* <FadeTransition> */}
        <div>
          <ul className='header'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/stuff'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Resume</NavLink>
            </li>
            <li>
              <a href='https://github.com/loganrobinson315?tab=overview&from=2020-12-01&to=2020-12-31'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </li>
            <li>
              <a className='github' href='https://www.linkedin.com/in/loganrobinson3/'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </li>
          </ul>
          <div className='headerpic'>
            <h1>Logan Robinson</h1>
            <h3 className='dev'>[Developer]</h3>

          </div>
          {/* <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          > */}
          <div className='content'>
              <Route exact path='/' component={Home} />
              <Route path='/stuff' component={Stuff} />
              <Route path='/contact' component={Contact} />
            </div>
          <div className='content' />
          {/* </ReactCSSTransitionGroup> */}
        </div>
        {/* </FadeTransition> */}
      </HashRouter>

    )
  }
}

export default Main
