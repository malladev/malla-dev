import React from 'react'

function Layout({children}) {
  return (
    <div className='w-full mx-auto max-w-7xl p-3'>{children}</div>
  )
}

export default Layout