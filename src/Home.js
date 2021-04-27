import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome,</h1>
        <div className='home-container'>
          <div className='bio'>
            <div className='bio-header'>
              <h2>Bio</h2>
            </div>
            <p>"I'm Logan Robinson. A full stack Software Developer with experience in sales and marketing for product led organizations.
              Skilled in Python, Django, React, HTML, CSS and JavaScript and interested in applying my proven
              relationship-building skills and creativity to a highly collaborative development team. Experienced
              with Agile methodologies and remote work environments and excited to use technology in
              innovative ways to solve real problems."
            </p>
          </div>
          <img className='headshot' src='/images/headshot.jpg' />

        </div>
        <div className='button-container'>

          <a className='code' href='https://github.com/loganrobinson315/portfolio'>View Code For Site</a>
        </div>

      </div>
    )
  }
}

export default Home
