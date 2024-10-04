import React, { useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../Hooks/useTelegram'
function Form() {

const [country, setCountry] = useState('')
const [street, setStreet] = useState('')
const [subgact, setSubgact] = useState('physical')
const {tg} =useTelegram()

const onChangeCountry = (e) => {
    setCountry(e.target.value)
}
const onChangeCity = (e) => {
    setStreet(e.target.value)
}
const onChangeSubgact = (e) => {
    setSubgact(e.target.value)
}


useEffect(() => {	
tg.Main.Button.SetParams({
    text: 'Malumotlarni Yuborish'
})
}, [])

useEffect(() => {	
   if(!street || !country) {
    tg.MainButton.hide()
   } else {
    tg.MainButton.show()
   }
   
    }, [country, street, ])

  return (
    <div className='form'>
     <h3>Malumotlaringizni kirgizing</h3>
     <input type="text" className='input' placeholder="Shahar"
     value={country} onChange={onChangeCountry} />
     <input type="text" className='input' placeholder="Koçha"
     value={street} onChange={onChangeCity} />
  
     <select className='select'    value={subgact} onChange={onChangeSubgact}>
       <option value={'physical'}>Jismoniy Shahs</option>
       <option value={'legal'}>Yuridik Shahs</option>
       </select>
    </div>
  )
}

export default Form
