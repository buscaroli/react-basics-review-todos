import React from 'react'

function Titles({firstTitle, secondTitle}) {
  return (
    <React.Fragment>
      <div className='ui grid container'>
          <div className='ten wide column'>
            <div className='ui inverted segment'>
              <h2 className='ui inverted header centered'>
                {firstTitle}
              </h2>
            </div>
          </div>

          <div className='six wide column'>
            <div className='ui inverted segment red'>
              <h2 className='ui inverted header centered'>
                {secondTitle}
              </h2>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Titles
