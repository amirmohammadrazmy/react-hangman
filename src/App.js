import React ,{useState, useEffect} from 'react'
import Header from './components/Header'
import Figure from './components/Figure'
import Wrongletter from './components/Wrongletter'
import Word from './components/Word'
import Notification from './components/Notification'
import Popup from './components/Popup'
import {showNotification as show} from './components/helpers/helpers'
//---------------------------------------------
const words = ['application', 'programming', 'interface', 'wizard', 'iran','omigo','esteglal'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


const App = () => {
  const [playable , setplayable]= useState(true)
  const [correctLetters, setcorrectLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
  const handleKeydown = event => {
    const {key , keyCode } = event;
      if (playable && keyCode >= 65  && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setcorrectLetters(currentLetters => [...currentLetters, letter]);  
  
          
          } else {
           show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setwrongLetters(wrongLetters => [...wrongLetters, letter]);  
  
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown); 
     return() => window.removeEventListener('keydown', handleKeydown) 
  }, [correctLetters, wrongLetters, playable]);
      

  function playAgain(){
    setplayable(true);

    setcorrectLetters([]);
    setwrongLetters([]);
    
    const random = Math.floor(Math.random() * words.length );
    selectedWord = words [random];
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Wrongletter wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setplayable={setplayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  )
}

export default App
