import { useState } from 'react'
import React from 'react'
import './App.css'
import CardLogo from './assets/images/card-logo.svg'

const App = () => {
  const [name, setName] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvvNum, setCvvNum] = useState('')
  
  const format = (mainVal, subVal) =>{
    return mainVal.trim() ? mainVal : subVal
  }

  const space = (value) =>{
    let newVal = ''
    let temp = ''

    for (let index=0; index < value.length; index++){
    temp += value[index]

    if (temp.length === 4){
      newVal += temp + ''
      temp = ''
      }
    }
    return newVal.trim()

  }

  const validate=(value, setter)=>{
    if (isNaN(value.slice(-1))){
      setter(value.slice(0, -1))
    }
  }

  // const nextInput=(evt, max)=>{
  //   let previousSibling = evt.target.

  // }


  return (
    <div className='App'>
      <header>
        <div className="card-1">
          <div className="logo">
            <img src={CardLogo} alt="" />
          </div>
            <p className='card-num' >{ format(space(cardNum.padEnd(16, 0)), '0000 0000 0000 0000') }</p>
            <footer>
              <p className='card-holder' >{ format(name, 'Jane Appleseed') }</p>
              <p className='expires-in' >{format(expMonth, '00')}/{format(expYear, '00')}</p>
            </footer>
          
        </div>
        <div className="card-2">
          <p className='cvv' >{format(cvvNum, '000')}</p>
        </div>
      </header>
      <main>
        <form>

          <div className="input-block">
            <label htmlFor="card-holder-name">CARDHOLDER NAME</label>
            <input type="text" placeholder='e.g Jane Appleseed' id='card-holder-name' onChange={evt=> setName(evt.target.value)} value={name} maxLength={25}/>

          </div>

          <div className="input-block">
            <label htmlFor="card-holder-number">CARD NUMBER</label>
            <input type="tel" maxLength={16} placeholder='e.g 1234 5678 9123'id='card-holder-number' onChange={evt=>setCardNum(evt.target.value)} value={cardNum} maxLength={16}/>
          </div>

          <div className="input-block-container">
            <div className="input-block">
              <label htmlFor="card-holder-number">EXP. DATE (MM/YY)</label>
              <input type="tel" maxLength={2} placeholder='MM'id='exp-date-month' onChange={evt=>setExpMonth(evt.target.value)} value={expMonth} maxLength={2}/>
              <input type="tel" maxLength={2} placeholder='YY'id='exp-date-year' onChange={evt=>setExpYear(evt.target.value)} value={expYear} maxLength={2}/>
            </div>

            <div className="input-block">
              <label htmlFor="cvv">CVV</label>
              <input type="tel" maxLength={3} placeholder='e.g 123' id='cvv' onChange={evt=>setCvvNum(evt.target.value)} value={cvvNum} maxLength={3}/>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </main>
    </div>
  )
}

export default App