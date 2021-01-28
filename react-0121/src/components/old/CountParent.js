import { useState } from 'react'
import CountFunc2 from './CountFunct2'

function CountPaternt() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <CountFunc2 total={total} setTotal={setTotal} />
      <button
        onClick={() => {
          setTotal(10)
        }}
      >
        設定一開始為 10
      </button>
      <button
        onClick={() => {
          setTotal(100)
        }}
      >
        設定一開始為 100
      </button>
    </>
  )
}

export default CountPaternt
