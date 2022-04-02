import React from 'react'

type Props = {
  text: string
}

const App: React.FC<Props> = ({ text }) => {
  return (
    <div className="header">{text}</div>
  )
}

export default App
