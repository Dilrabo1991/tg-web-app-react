import React, { useEffect } from 'react'
import { useTelegram } from './components/Hooks/useTelegram';
function App() {
  const {tg, onClose, onToggleButton}= useTelegram()

useEffect(() => {
  tg.ready()
 }, []);


  return (
    <div>
      Web App
      <button onClick= {onToggleButton}>Toggle</button>
    </div>
  )
}

export default App
