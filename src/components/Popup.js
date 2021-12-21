import React  from 'react'
import {checkWin} from './helpers/helpers'
import { useEffect } from 'react'

const Popup = ({correctLetters, wrongLetters,selectedWord, setplayable, playAgain } ) => {
    let finalMessage= '';
    let finalMessageRevealWord= '';
    let playable = true;
    
    
    if(checkWin(correctLetters, wrongLetters,selectedWord) ==='win' ) {
      finalMessage = '😎😎ایول تو بردی';
      playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) ==='lose') {
      finalMessage = '😢😢مردی که ';
      finalMessageRevealWord = `کلمه درست این بودش: ${selectedWord}`;
      playable= false;
    }

    useEffect(() => setplayable(playable));
    return (
<div className="popup-container" style ={finalMessage !== '' ? {display: 'flex'} : {}} >
      <div className="popup">
        <h2 >{finalMessage} </h2>
        <h3 > {finalMessageRevealWord} </h3>
        <button onClick={playAgain} >Play Again</button>
      </div>
      </div>
    )
}

export default Popup
