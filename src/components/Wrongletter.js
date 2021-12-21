import React from 'react'

const Wrongletter = ({wrongLetters}) => {
    return (
<div className="wrong-letters-container">
        <div>
           {wrongLetters.length > 0 && <p>اشتباه</p>}
           {wrongLetters
           .map((letter, i) => <span key = {i}>{letter}</span>)
           .reduce((prev, curr) => prev == null ? [curr] : [prev, ', ',curr] , null)}
        </div>
      </div>
    )
}

export default Wrongletter
