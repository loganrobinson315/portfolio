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
              chores while providing statistics and social interactions. My role in this group project was to be the sole backend developer and collaborate with my team of front end developers. This app is built on the Django-Rest-framework and returns a large amount of JSON data through an API. I also played a role in developing the messaging system on the front end along with the CSS.
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/chore.png' alt='img' />
            <img className='profile' src='/images/profile.png' alt='img' />
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
            <p> Cards with Friends is designed to be a platform where you can easily create and share greeting cards with friends. along with sharing cards, you are also able to follow certain users and even send likes to your friends cards. As the sole backe-end developer on this app as well, we were able to collaborate and put together this app using the Django-rest-framework and React.

            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/cardhome.png' alt='img' />
            <img className='profile' src='/images/cardlist.png' alt='img' />
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
            <p>Habit Tracker is an app that I individually made in Django. This allows you take make task and hold yourself accountable by tracking your progress. You are able to create a profile, set goals, record them daily, and see your daily average.
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/habithome.png' alt='img' />
            <img className='profile' src='/images/habitview.png' alt='img' />
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
            <p>Habit Tracker is another individual app that allows users that sign up to make flash card decks as a study tool. Once the user creates the deck, you can view the cards and flip them over by hovering over the cards.
            </p>
          </div>
          <div className='image-container'>
            <img className='chore' src='/images/flashhome.png' alt='img' />
            <img className='profile' src='/images/flashdeck.png' alt='img' />
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
