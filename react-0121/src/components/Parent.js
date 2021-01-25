import { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function Parent() {
  const [data, setData] = useState('')

  return (
    <>
      <h1>{data}</h1>
      <ChildOne setData={setData} />
      <ChildTwo data={data} />
    </>
  )
}

export default Parent
