import React from "react"

function Layout({children}) {
  return (
    <div className="w-full mx-auto max-w-6xl px-5 py-3">{children}</div>
  )
}

export default Layout