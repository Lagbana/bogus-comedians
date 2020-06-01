import React, { Component } from 'react'
import BackgroundCard from './BackgroundCard'
import Button from './Button'

class CreateComedian extends Component {
  onFormSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <BackgroundCard padTop='1rem' padBottom='1rem' padLeft='15%' width='50rem' divMargin='auto'>
        {
          <div className={'ui grid container'}>
            <div className={'sixteen wide column'} style={{paddingBottom:'2rem'}}>
              <h3> Create New Comedian </h3>
            </div>

            <form onSubmit={this.onFormSubmit} className={'ui form'}>
              <div className={'field'}>
                <label>First Name</label>
                <input type='text' name='first-name' placeholder='First Name' />
              </div>

              <div className={'field'}>
                <label>Last Name</label>
                <input type='text' name='last-name' placeholder='Last Name' />
              </div>

              <div className={'field'}>
                <label>Best Dad Joke</label>
                <textarea
                  type='text'
                  name='best-dad-joke'
                  placeholder='Best Dad Joke'
                  rows='4'
                ></textarea>
              </div>

              <div className='center aligned'>
                <Button
                  color='ui blue button'
                  actionType='submit'
                  name='Submit'
                />
              </div>
            </form>
          </div>
        }
      </BackgroundCard>
    )
  }
}

export default CreateComedian
