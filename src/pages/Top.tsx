import React from 'react'
import Header from 'common/Header'
import Footer from 'common/Footer'
import 'styles/style.css'

const Top: React.VFC = () => {
  return (
    <div>
      <Header text="語呂吾郎のごろごろツール" />
      <div className="main">
        <p><a href="/Counter"><button className="button">ごろごろカウンター</button></a></p>
      </div>
      <Footer />
    </div>
  )
}

export default Top
