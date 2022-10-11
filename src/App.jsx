import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import CardQuotes from './components/CardQuotes'
import colors from './utils/colors'
import Footer from './components/Footer'


function App() {
  
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  let quoteRandom = getRandomElement(quotes)
  let colorsRandom = getRandomElement(colors)
  
  const [randomQuotes,setRandomQuotes] = useState(quoteRandom)
  const [randomColors, setrandomColors] = useState(colorsRandom)
  
  const objectStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () =>{
    quoteRandom = getRandomElement(quotes)
     colorsRandom = getRandomElement(colors)
    
    setRandomQuotes(quoteRandom)
    setrandomColors(colorsRandom)
  }
  
  return (
    <div className="App" style={objectStyle}>
      <CardQuotes 
        randomQuotes={randomQuotes} 
        randomColors={randomColors}
        getRandomAll={getRandomAll} />
      
      <Footer />
    </div>
  )
}

export default App
