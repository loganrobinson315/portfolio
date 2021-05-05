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
          {/* <div className='headerpic'>
            <h1>Logan Robinson</h1>
            <h3 className='dev'>[Developer]</h3>

          </div> */}
          <header className='main-header'>
            <div className='overlay' />
            <video playsinline='playsinline' autoplay='autoplay' muted='muted' loop='loop'>
              <source src='/images/Laptop2.mp4' type='video/mp4' />
            </video>
            <div class='container h-100'>
              <div class='d-flex h-100 text-center align-items-center'>
                <div class='w-100 text-white'>
                  <h1 className='header-title'>Logan Robinson</h1>
                  <h3 className='dev'>[Developer]</h3>

                </div>
              </div>
            </div>
          </header>

          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/stuff' component={Stuff} />
            <Route path='/contact' component={Contact} />
          </div>
          <div className='content' />

        </div>

      </HashRouter>

    )
  }
}

export default Main
