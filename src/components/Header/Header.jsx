import React from 'react'

function Header() {
    const tg = window.Telegram.WebApp 
    const onClose = () => {
      tg.close()
    }


  return (
    <div className={'header'}>
      <Button onClick={onClose}>Yopish</Button>
      <span className={'user-name'}>{tg.initDataUnsafe?.user?.first_name}</span>
    </div>
  )
}

export default Header
