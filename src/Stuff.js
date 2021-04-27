import React, { Component } from 'react'

class Stuff extends Component {
  render () {
    return (
      <div>
        <div>
          <div className='content-container-start'>
            <h1 className='project-title'>Chore Wars</h1>
            <h4>Description:</h4>
            <p>Chore Wars is designed to help families hold kids accountable for doing their chores while
              allowing them to compete against other families. It provides easy ways to create and assign
              chores while providing statistics and social interactions.
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/chore.png' />
            <img className='profile' src='/images/profile.png' />
          </div>
          <div className='button-container'>
            <a className='site' href='https://chorewars.netlify.app/#/'>View Site</a>
            <a className='code' href='https://github.com/JLT-Phase4'>View Code</a>
          </div>

        </div>
        <div>
          <div className='content-container'>
            <h1 className='project-title'>Group Social Cards</h1>
            <h4>Description:</h4>
            <p>Mauris sem velit, vehicula eget sodales vitae,
              rhoncus eget sapien:
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/cardhome.png' />
            <img className='profile' src='/images/cardlist.png' />
          </div>
          <div className='button-container'>
            <a className='site' href='https://sharp-wright-161e04.netlify.app/#/'>View Site</a>
            <a className='code' href='https://github.com/momentum-projects/group-social-ecards-tracy-logan-matt'>View Code</a>
          </div>

        </div>
        <div>
          <div className='content-container'>
            <h1 className='project-title'>Habit Tracker</h1>
            <h4>Description:</h4>
            <p>Mauris sem velit, vehicula eget sodales vitae,
              rhoncus eget sapien:
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/habithome.png' />
            <img className='profile' src='/images/habitview.png' />
          </div>
          <div className='button-container'>
            <a className='site' href='https://loganrobinson315-flashcard.herokuapp.com/'>View Site</a>
            <a className='code' href='https://github.com/momentum-projects/django-habit-tracker-loganrobinson315'>View Code</a>
          </div>

        </div>
        <div>
          <div className='content-container'>
            <h1 className='project-title'>Flash Cards</h1>
            <h4>Description:</h4>
            <p>Mauris sem velit, vehicula eget sodales vitae,
              rhoncus eget sapien:
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/flashhome.png' />
            <img className='profile' src='/images/flashdeck.png' />
          </div>
          <div className='button-container'>
            <a className='site' href='https://loganrobinson315-flashcard.herokuapp.com/'>View Site</a>
            <a className='code' href='https://github.com/momentum-team-6/django-multiple-choice-loganrobinson315'>View Code</a>
          </div>

        </div>
      </div>
    )
  }
}

export default Stuff
