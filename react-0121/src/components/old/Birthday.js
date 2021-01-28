import { useEffect, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Birthday() {
  // const [birth, setBirth] = useState('2021-01-27')
  const [birthDate, setBirthDate] = useState(new Date())
  const [age, setAge] = useState(0)
  const calcAge = (birthday) => ~~((new Date() - birthday) / 31557600000)

  useEffect(() => {
    setAge(calcAge(birthDate))
  }, [birthDate])

  return (
    <>
      <label for="birth">出生年月日：</label>
      {/*
      <input
        type="date"
        id="birth"
        name="birth"
        value="2018-07-22"
        onChange={(e) => {
          setBirth(e.target.value)
        }}
        min="1920-01-01"
        max="2021-01-01"
      /> */}
      <DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
      />
      <h2>{age > 18 ? '滿 18 歲' : '未滿 18 歲'}</h2>
      <h1>{}</h1>
    </>
  )
}

export default Birthday
