import React from 'react'
import GitHub from 'common/imgs/github.png'

const Footer: React.VFC = () => {
  return (
    <div className="footer">
      <a href="https://github.com/hgssnk/gologolo_homepage" target="_blank"> <img src={GitHub} alt="hoge" /> </a>
    </div>
  )
}

export default Footer


