import React from 'react'

const BackgroundCard = props => {
  return (
    <div
      className={`ui card`}
      style={{
        width: props.width,
        paddingLeft: props.padLeft,
        paddingRight: props.padRight,
        paddingTop: props.padTop,
        paddingBottom: props.padBottom,
        margin: props.divMargin
      }}
    >
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default BackgroundCard
