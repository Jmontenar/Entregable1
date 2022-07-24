import React from 'react'

const CardQuotes = ({randomQuotes, randomColors, getRandomAll}) => {
   
   const objectStyle = {
    color: randomColors
}
const objectStyle2 = {
    backgroundColor: randomColors    
}

    return (
    
    <article className='Card' style={objectStyle}>
        <header>

        </header>
        <div className='Card__container'>
        <i className='fa-solid fa-quote-left'></i>
        <span className='Card__quote'>{randomQuotes.quote}</span><p className='Card__author'>{randomQuotes.author}</p>
        <button onClick={getRandomAll}className='Card__button' style={objectStyle2}>&#62;</button>
        </div>
    
        
        </article>
  )
}

export default CardQuotes