import React, { useState, useEffect } from 'react'

function MyNavbar(props) {
  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div className="container">{props.children}</div>
      </main>
    </>
  )
}

export default MyNavbar
