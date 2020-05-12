import React from 'react'
import BackgroundCard from './BackgroundCard'

const CreateComedian = () => {

    const form = () => {
        return (
            <div>
                <form className= "ui form">
                    <div className= "field">
                        <label>First Name</label>
                        <input type= "text" name="first-name" placeholder="First Name" />
                    </div>
                    <div className= "field">
                        <label>Last Name</label>
                        <input type= "text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div className="field">
                        <label>Country</label>
                        <input type="text" name="country" placeholder="Country" />
                    </div>
                    <div className="field">
                        <label>Best Dad Joke</label>
                        <input type="text" name="best-dad-joke" placeholder="Best Dad Joke" />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }

    return (
        <BackgroundCard>
            {form()}
        </BackgroundCard >
    )
}

export default CreateComedian