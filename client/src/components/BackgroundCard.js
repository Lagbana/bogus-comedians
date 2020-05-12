import React from 'react'

const BackgroundCard = props => {
    return (
        <div className={`ui card`}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default BackgroundCard