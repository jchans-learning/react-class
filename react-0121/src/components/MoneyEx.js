import { useState } from 'react'

function MoneyEx() {
  const [money, setMoney] = useState('')
  const [exMoney, setExMoney] = useState('')

  return (
    <>
      <input
        type="text"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button onClick={() => setExMoney((+money / 28.53).toFixed(2))}>
        NTD to USD
      </button>
      <button onClick={() => setExMoney((+money * 28.53).toFixed(0))}>
        USD to NTD
      </button>
      <h3>轉換的金額是：{exMoney}</h3>
    </>
  )
}

export default MoneyEx
