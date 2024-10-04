import React, { useEffect } from 'react'
import { useTelegram } from './components/Hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
function App() {
  const {tg,  onToggleButton}= useTelegram()

useEffect(() => {
  tg.ready()
 }, []);


  return (
    <div>
    
      <Header />
      <button onClick= {onToggleButton}>Toggle</button>
    </div>
  )
}

export default App
