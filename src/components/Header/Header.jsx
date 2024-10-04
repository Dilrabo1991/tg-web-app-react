import React from 'react'
import { useTelegram } from '../Hooks/useTelegram'
import Button from '../Button/Button' 
import './Header.css'
function Header() {
    const { onClose, user}= useTelegram()
  


  return (
    <div className={'header'}>
      <Button onClick={onClose}>Yopish</Button>
      <span className={'user-name'  }>{user?.first_name}</span>
    </div>
  )
}

export default Header
