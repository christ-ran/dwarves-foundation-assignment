import React from 'react'
import { BsStar } from 'react-icons/bs'
import { GrLinkNext } from 'react-icons/gr'

import './repo.css'

const Repo = ({ children, name, visibility, language, stars, url }) => {
  return (
    <div className="r-i-w">
      <div className="r-i-c flex">
        <div className="flex jc-c-sb ai-c">
          <p className="r-n">{name}</p>
          <p className="r-v">{visibility}</p>
        </div>
        <div className="r-b">
          <p className="r-b-t">{children}</p>
        </div>
        <div className="r-f flex jc-c-sb">
          <div className="flex">
            <p className="r-l">{language}</p>
            <div className="st-c flex">
              <BsStar />
              <p className="r-s">{stars}</p>
            </div>
          </div>
          <a className="r-go" href={url}>
            <GrLinkNext />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Repo
