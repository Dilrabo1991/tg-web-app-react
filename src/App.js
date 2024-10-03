import React, { useEffect } from 'react'
const tg = window.Telegram.WebApp 
function App() {

useEffect(() => {
  tg.ready()
 }, []);

const onClose = () => {
  tg.close()
}
  return (
    <div>
      Web App
      <button onClick= {onClose}>Close</button>
    </div>
  )
}

export default App
