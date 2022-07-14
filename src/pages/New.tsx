import React from 'react'
import Header from 'common/Header'

type Props = {
  number: number
}

const New: React.VFC = () => {
  return(
    <div>
      <Header text="hoge" />
      <p>New page</p>
    </div>
  )
}

export default New
