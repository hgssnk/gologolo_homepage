import React from 'react'
import Header from 'common/Header'
import 'styles/style.css'

const Top: React.VFC = () => {
  return (
    <div>
      <Header text="語呂吾郎のごろごろツール" />
      <p className="main">
        <a href="/Counter"><button className="button">ごろごろカウンター</button></a>
      </p>
    </div>
  )
}

export default Top
