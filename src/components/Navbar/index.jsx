import React from 'react'

const Header = () => {
  const srcImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/756ac3cf-5cef-4bfe-a74e-43e4d713903a/d7z0vj3-f0ad70c1-2d6a-406e-a4ce-87d011860140.png/v1/fill/w_1024,h_365,strp/marvel_logo_by_jmk_prime_d7z0vj3-fullview.png"
  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <div className="logo">
              <img className="logo_img" src={srcImg} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
