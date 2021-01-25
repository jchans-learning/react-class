import { useState } from 'react'
import CountFunc2 from './CountFunct2'

function CountPaternt() {
  const [initNumber, setInitNumber] = useState(0)

  return (
    <>
      <CountFunc2 initNumber={initNumber} />
      <button
        onClick={() => {
          setInitNumber(10)
        }}
      >
        設定一開始為 10
      </button>
      <button
        onClick={() => {
          setInitNumber(100)
        }}
      >
        設定一開始為 100
      </button>
    </>
  )
}

export default CountPaternt
